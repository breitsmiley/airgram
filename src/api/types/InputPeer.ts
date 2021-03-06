
export interface InputPeerChannel {
  _: 'inputPeerChannel'
  channel_id: number
  access_hash: number
}

export interface InputPeerChat {
  _: 'inputPeerChat'
  chat_id: number
}

export interface InputPeerEmpty {
  _: 'inputPeerEmpty'
}

export interface InputPeerSelf {
  _: 'inputPeerSelf'
}

export interface InputPeerUser {
  _: 'inputPeerUser'
  user_id: number
  access_hash: number
}

export type InputPeerUnion = InputPeerChannel
  | InputPeerChat
  | InputPeerEmpty
  | InputPeerSelf
  | InputPeerUser
