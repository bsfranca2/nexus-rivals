export type Message = {
  action: string
  data: unknown
}

export enum MessageAction {
  CreateCharacter = 'CREATE_CHAR',
}
