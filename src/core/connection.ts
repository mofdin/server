import socketio from 'socket.io'
import http from 'http'

class Connection {
  readonly io: socketio.Server

  constructor(http: http.Server) {
    this.io = new socketio.Server(http, {
      cors: {
        origin: '*',
      },
    })
  }

  listen(calback: (socket: socketio.Socket) => void) {
    this.io.on('connection', calback)
  }
}

export default Connection
