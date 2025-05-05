const express = require('express');
const route = express.Router();

route.get("/", async (req,res)=>{ console.log("Api is connected with the frontend");  res.status(200).send({"message":"Api Hit"})} )

module.exports = {
    route
}