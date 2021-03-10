const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.set("view engine","ejs")

app.get("/", (req, res) => {
  res.render("index")
})