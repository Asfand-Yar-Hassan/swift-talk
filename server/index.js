import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server as SocketIOServer } from 'socket.io'

const app = express()
const server = http.createServer(app)
const socketIo = new SocketIOServer(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})
app.use(cors())
const PORT = 4000

socketIo.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`)
  socket.on('disconnect', () => {
    console.log(`🔥: A user disconnected`)
  })
})


app.get('/api', (req, res) => {
  res.json({
    message: 'Hello World',
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
