const User = require('../models/userModel.js');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const { redis } = require('../app.js');

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const topPairs = await redis.zrevrange(
      "top20",
      0,
      19,
      "WITHSCORES"
    );
    
    const data = {};
    for (let i = 0; i < topPairs.length; i+=2) { 
        data[topPairs[i]] = topPairs[i + 1];
    }
    res.status(200).json({
        status: "success",
        data
    })
});
exports.updateMe = catchAsync(async (req, res, next) => {
    if (!req.user) {
        next(
            new AppError('U are not logged in!!',400)
        )
    }
    let currSore = await redis.get(`user:${user.name}`);
    if (req.body.score < currSore) {
        res.status(200).json({
            status: "success",
        })
     }
        await redis.set(`user:${user.name}`,req.body.score);
    
    const updatedUser = await User.findByIdAndUpdate(req.user._id, { score: req.body.score }, {
        runValidator: true
    });
    updatedUser.save({ validateBeforeSave: false
     });
    res.status(200).json({
        status: 'success',
        data: {
            user:updatedUser
        }
    })
})