const express = require('express')
const http = require('http')
// const socketIo = require('socket.io')
const socket = require('socket.io')
const bodyParser = require('body-parser')
const cors = require('cors')
let x = true;

const app = express()
app.use(cors({origin: '*'}))

app.get('/', (req, res)=>{
    res.send('Hello Word')
})

const server = http.Server(app)
server.listen(3000)

// const io = socketIo(server)

const io = socket(server)

// io.on('connection', (socket)=>{
//     socket.emit('hello', {
//         greeting: 'Hello Paul'
//     })
// })

io.sockets.on('connection', (socket)=>{
    console.log(`new connection id:  ${socket.id}`)
    sendData(socket)
})

function sendData(socket){
    if(x){
        socket.emit('data1', Array.from({length: 8}, () => Math.floor(Math.random() * 590)+10))
        x = !x;
    }else{
        socket.emit('data2', Array.from({length: 8}, () => Math.floor(Math.random() * 590)+10))
        x = !x;
    }
    console.log(`data is ${x}`)
    setTimeout(() => {
        sendData(socket)
    }, 100);
}