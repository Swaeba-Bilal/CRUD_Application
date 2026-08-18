/*const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRoutes");
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use("/api/v2/users", userRouter)
module.exports = app;*/
const express = require("express");
const cors = require("cors");

const app = express();

const userRouter = require("./routes/userRoutes");

app.use(
  cors({
    origin: "https://crud-application-sni3-umber.vercel.app",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v2/users", userRouter);

module.exports = app;