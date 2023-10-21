import { Server } from 'socket.io'
import { Events } from './events'
import { rooms } from './rooms'
import { Room } from './room'
import * as queries from './queries'

const io = new Server()

// Sempre informar o username antes de conectar
// Verificar token para adicionar em game ja existente
io.on('connection', (socket) => {
  socket.socket.on(Events.CreateRoom, () => {
    console.debug('Creating room...')
    const room = new Room()
    const roomId = room.getId()
    // queries.createRoom(roomId, socket.)
    rooms.set(roomId, room)
    socket.send(Events.CreatedRoom, JSON.stringify({ roomId }))
  })

  socket.on(Events.JoinRoom, (message) => {
    console.log('message', message)
  })
})

export default io
