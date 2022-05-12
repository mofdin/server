import socketio from 'socket.io'

import { Direction } from '@/core/enums'
import Player from '@/player'

export type GameConnection = {
  socket: socketio.Socket
  player: Player
}

export type Movement = {
  direction: Direction
  isPressing: boolean
}
