import Entity from '@/entity'

class Player extends Entity {
  name: string

  pressingRight: boolean
  pressingLeft: boolean
  pressingUp: boolean
  pressingDown: boolean
  maxSpeed: number

  constructor() {
    super()

    this.name = `Player ${this.id}`
    this.pressingRight = false
    this.pressingLeft = false
    this.pressingUp = false
    this.pressingDown = false
    this.maxSpeed = 10
  }

  update() {
    this.updateSpeed()

    super.update()
  }

  updateSpeed() {
    if (this.pressingRight) {
      this.speedX = this.maxSpeed
    } else if (this.pressingLeft) {
      this.speedX = -this.maxSpeed
    } else {
      this.speedX = 0
    }

    if (this.pressingUp) {
      this.speedY = -this.maxSpeed
    } else if (this.pressingDown) {
      this.speedY = this.maxSpeed
    } else {
      this.speedY = 0
    }
  }
}

export default Player
