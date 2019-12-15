const express = require('express'); 
const path = require("path"); 
var app = express(); 
app.listen(8081, () => console.log('app fired on port 8081'));
app.use('/', express.static(path.join(__dirname, './ktm'))); 