require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');
const dbConnect = require("./config/dbConnect");
const blogRouter = require("./routes/blogRoute");
const userRouter = require("./routes/userRoute");
const PORT = process.env.PORT || 4000;
const app = express();

dbConnect();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", blogRouter);
app.use("/", userRouter);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "The resource you requested for does not exist" });
  } else {
    res.send("The resource you requested does not exist");
  }
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log("Server is running"));
});
