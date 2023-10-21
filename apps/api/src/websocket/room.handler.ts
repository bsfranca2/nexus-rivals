import { Server, Socket } from 'socket.io'
import { Events } from '../events'
import * as queries from '../queries'
import { Room } from '../room'
import { rooms } from '../rooms'

export const registerRoomHandlers = (io: Server, socket: Socket) => {
  socket.on(Events.CreateRoom, () => {
    console.debug('Creating room...')
    const room = new Room()
    const roomId = room.getId()
    queries.createRoom(roomId, 'some-username') // socket.username
    rooms.set(roomId, room)
    socket.send(Events.CreatedRoom, { roomId })
  })

  socket.on(Events.JoinRoom, () => {
    //
  })
}
