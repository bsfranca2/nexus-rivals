import ShortUniqueId from 'short-unique-id'
import { Socket } from 'socket.io'

const uid = new ShortUniqueId({ length: 6, dictionary: 'alpha_lower' })

export type RoomDetails = {
  players: string[]
}

export class Room {
  private id = uid.rnd()
  private player1!: WS
  private player2!: WS
  private character1!: Character
  private character2!: Character

  constructor() {}

  getId() {
    return this.id
  }

  join(socket: Socket) {
    socket.join(this.id)
    if (!this.player1) {
      this.player1 = ws as WS
    } else if (!this.player2) {
      this.player2 = ws as WS
    }
  }

  createCharacter(ws: unknown, data: CreateCharacterData) {
    const { id: currentPlayerId } = ws as WS
    const char = Character.create(data)
    if (this.player1.id === currentPlayerId) {
      this.character1 = char
    } else if (this.player2 === currentPlayerId) {
      this.character2 = char
    }
  }
}
