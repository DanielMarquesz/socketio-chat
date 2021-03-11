const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on("connection",(socket) =>{ // socket: References the client that is connected

  socket.on("disconnect", () =>{
    console.log(socket.id + " Was disconnected!")
  })

  socket.on("Welcome", (data) => {
    console.log('Executando evento de boas vindas!')
    console.log(data)
  })

  socket.on("word", (data) => {    
    socket.emit("result", data + " Curso de NodeJs")
    
  })
 
})

app.set("view engine","ejs")

app.get("/", (req, res) => {
  res.render("index")
})

http.listen(3000, () => {
  console.log('The app is Running!')
})