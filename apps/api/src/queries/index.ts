import type { RoomDetails } from '../room'
import { storage } from './storage'

export const createRoom = async (roomId: string, createdByUsername: string) => {
  const details: RoomDetails = { players: [createdByUsername] }
  await storage.setItem(`room#${roomId}`, details)
}
