export enum Events {
  CreateRoom = 'room:create',
  CreatedRoom = 'room:created',
  JoinRoom = 'room:join',
}

export type JoinRoomEvent = {
  roomId: string
}
