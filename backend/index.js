const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(cors({
       origin: 'https://my-blog-app-xscl.vercel.app', // Allow requests only from this origin
       methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
       allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
       credentials: true // Allow sending cookies and authentication headers
   }));




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
