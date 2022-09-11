'use strict'

console.log("Chat inicializado...")

const app = require('express')()
const serverHTTP = require('http').Server(app)
const io = require('socket.io')(serverHTTP)

const myMessages = []

io.on('connectio', function(socket){ 
    socket.on('send-message', function(data){
        myMessages.push(data)
        socket.emit('text-event', myMessages)
        socket.broadcast.emit('text-event', myMessages)
    })
})

serverHTTP.listen(3000, () => {
    console.log('Server corriendo en puerto 3000')
})