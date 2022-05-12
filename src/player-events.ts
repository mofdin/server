import socketio from 'socket.io'

import type { Movement } from '@/core/types'
import { Direction } from '@/core/enums'
import Game from '@/game'
import Player from '@/player'

class PlayerEvents {
  static dispatch(socket: socketio.Socket, player: Player) {
    this.onMove(socket, player)
    this.onDisconnect(socket, player)
  }

  static onUpdate() {
    var pack: any[] = []
    Game.players.forEach((player) => {
      player.update()

      pack.push(player)
    })

    Game.connections.forEach(({ socket }) => {
      socket.emit('playersMove', pack)
    })
  }

  static onMove(socket: socketio.Socket, player: Player) {
    socket.on('playerMove', (movement: Movement) => {
      if (movement.direction === Direction.UP) {
        player.pressingUp = movement.isPressing
      } else if (movement.direction === Direction.DOWN) {
        player.pressingDown = movement.isPressing
      } else if (movement.direction === Direction.LEFT) {
        player.pressingLeft = movement.isPressing
      } else if (movement.direction === Direction.RIGHT) {
        player.pressingRight = movement.isPressing
      }
    })
  }

  static onDisconnect(socket: socketio.Socket, player: Player) {
    socket.on('disconnect', () => {
      Game.players = Game.players.filter((p) => p.id !== player.id)
      Game.connections = Game.connections.filter(
        (c) => c.player.id !== player.id
      )
    })
  }
}

export default PlayerEvents
