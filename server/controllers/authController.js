const User = require("../models/userModel.js")
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync.js");
const AppError = require("../utils/appError.js");
const { redis } = require("../app.js");
const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user,statusCode,res) => {
    const token = signToken(user._id);

    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    })
}

exports.isLoggedIn = catchAsync(async(req, res, next) => {
    const user = await User.findOne({name:req.body.name }).select('+password');
    if (user.active) return next(new AppError("U are already logged in some device", 400));
    req.user = user;
    next();
})

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    await redis.zadd("top20",`user:${newUser.name}`, 0);
    createSendToken(newUser, 201, res);

});

exports.login = catchAsync(async (req, res, next) => {
    const { name, password } = req.body;
    console.log(req.body);
    if (!name || !password) { 
        return next(new AppError("Please provide an username addr and password!",400));
    }
    const user = req.user;
    if (!user || !user.correctPassword(password, user.password)) {
        return next(new AppError("Please provide a valid username and password"));
    }
    user.active = true;
    await user.save({validateBeforeSave:false});
    createSendToken(user, 200, res);
})

exports.logout = catchAsync(async (req, res, next) => {
    let token;
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer")
    ) {
      return next(
        new AppError("U are not logged in , please login to continue", 401)
      )
    }
    
    token = req.headers.authorization.split(" ")[1];
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    const currentUser = await User.findOne({ _id: decoded.id }); 
    if (!currentUser||!currentUser.active) {
        return next(new AppError("Invalid operation user is inactive"));
    }

    
    if (currentUser.loggedOTime && currentUser.loggedOTime > decoded.iat * 1000 + 12) { 
        return next(new AppError("this session has been expired!", 401));
    }

    currentUser.loggedOTime = Date.now();
    currentUser.active = false;
    console.log(currentUser);
    await currentUser.save({validateBeforeSave:false});

    res.status(201).json({
        status: "success",
        data:currentUser
    })
    
})
exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if ((!req.headers.authorization) || (!req.headers.authorization.startsWith('Bearer'))) { 
        return next(new AppError("U are not logged in , please login to continue", 401));
    }
    token = req.headers.authorization.split(' ')[1];
    const decoded =await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded);
    const currentUser = await User.findOne({ _id:decoded.id }); 
    if (!currentUser) {
        return next("the user belonging to this user does not exist!", 401);
    }
    req.user = currentUser;
    next();
})