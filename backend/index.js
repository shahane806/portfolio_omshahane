const dotenv = require("dotenv");
const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
      extended: false,
      limit: '100kb'
    })
);
  
const PORT = process.env.PORT;
const MONGODBURL = process.env.MONGODBURL;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});

mongoose.connect(MONGODBURL)
  .then(() => {
    console.log("MongoDB connected successfully.");
    
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
