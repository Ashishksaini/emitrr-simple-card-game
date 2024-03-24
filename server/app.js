const express = require('express');
const dotenv = require("dotenv");
const userRouter = require('./routes/userRouter.js')
const Redis = require("ioredis");
const app = express();
dotenv.config({ path: 'config.env' });
app.use(express.json());
const redis = new Redis(process.env.REDIS_SERVICE_URL)

app.use('/api/v1/users',userRouter)


module.exports = {app,redis};
