const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});