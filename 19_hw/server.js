const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const path = require('path')

const router = require('./src/router')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static(path.resolve(__dirname, 'Public')))
app.use(express.urlencoded({ extended: true }))

app.use(router)


app.listen(PORT, console.log(PORT));
