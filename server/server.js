const authroutes = require("./routes/api/loginsignup");
const upload = require("./routes/api/upload");
const uploadTestRoutes = require("./routes/api/uploadTest")
const postsDumRoutes = require("./routes/api/dummieposts");
const commentsRoutes= require("./routes/api/comments");
const reportsRoutes = require("./routes/api/report");
const likesRoutes = require("./routes/api/likes")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');
dotenv.config()
const { PORT, mongoUri } = require("./config");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//////////////////////////////////////////////////////////
app.use("/api/loginsignup", authroutes);
app.use("/api/upload", upload);
app.use("/api/uploadtest", uploadTestRoutes);
app.use("/api/dummieposts", postsDumRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/report",reportsRoutes);
app.use("/api/likes", likesRoutes)
//////////////////////////////////////////////////////////
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));
/////////////////////////////////////////////////////////
app.get("/", (req, res) => res.send("server working!"));
////////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
