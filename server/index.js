const http = require("http");
const SocketIo = require('socket.io');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const {app,redis} = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const server = http.createServer(app);
const io = SocketIo(server);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

redis.on("error", (err) => {
  console.error("Redis conncection error", err);
})

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!");
  console.log(err.name, err.message);
  process.exit(1);
});
