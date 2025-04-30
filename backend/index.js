const dotenv = require("dotenv");
const cors = require('cors');
const express = require("express");

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
  
const PORT = 3568 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})