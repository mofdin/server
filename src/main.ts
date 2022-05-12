import Connection from './core/connection'
import Server from './core/server'

import Game from '@/game'

const server = new Server()
server.listen(3333)

const connection = new Connection(server.http)
connection.listen(Game.onConnection)

Game.io = connection.io
Game.loop()
