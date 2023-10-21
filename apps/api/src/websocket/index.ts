import { Server } from 'socket.io'
import type { Server as HttpServer } from 'node:http'
import { registerRoomHandlers } from './room.handler'

export const createSocketIo = (httpServer: HttpServer) => {
  const io = new Server(httpServer)

  io.on('connection', (socket) => {
    registerRoomHandlers(io, socket)
  })
}
