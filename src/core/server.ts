import express from 'express'
import http from 'http'

class Server {
  readonly app: express.Application
  readonly http: http.Server

  constructor() {
    this.app = express()
    this.http = http.createServer(this.app)
  }

  listen(port: number) {
    this.http.listen(port, () => {
      console.log(`Server is running on port: ${port}`)
    })
  }
}

export default Server
