const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(
  cors({
    origin: "https://my-blog-app-xscl-o1qr0aevx-sonu-kumars-projects-beca3941.vercel.app",
    credentials: true
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://my-blog-app-xscl-hyohaj3bw-sonu-kumars-projects-beca3941.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const connectDB = require("./src/helper/dB");
const blogRoute = require("./src/routes/blogRoutes");
const userRoute = require("./src/routes/userRoutes");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", blogRoute);
app.use("/api", userRoute);

app.listen(process.env.PORT || 4002, (err) => {
  if (err) {
    throw err;
  }
  connectDB();
  console.log("server listening on port", process.env.PORT);
});
