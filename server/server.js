const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(
    process.env.MONGODB_URI.replace(
      "<DB_PASSWORD>",
      process.env.DATABASE_PASSWORD
    )
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.log("MongoDB Connection error", error);
  });

module.exports = app;