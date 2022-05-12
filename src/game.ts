import socketio from 'socket.io'

import type { GameConnection } from '@/core/types'
import Player from '@/player'
import PlayerEvents from '@/player-events'

class Game {
  static io: socketio.Server
  static players: Player[] = []
  static connections: GameConnection[] = []
  static loopInterval: NodeJS.Timer

  static onConnection(socket: socketio.Socket) {
    const player = new Player()

    Game.connections.push({ socket, player })
    Game.players.push(player)

    PlayerEvents.dispatch(socket, player)
  }

  static loop() {
    console.log(`Game loop...`)

    Game.loopInterval = setInterval(() => {
      PlayerEvents.onUpdate()
    }, 1000 / 25)
  }

  static stop() {
    if (Game.loopInterval) clearInterval(Game.loopInterval)
  }
}

export default Game
