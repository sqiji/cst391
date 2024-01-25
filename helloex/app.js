/*
Soran Qiji
CST-391
01/04/2024
Activity 0 - Express (Hello World)
*/


const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Using nodemon to run app.js"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));