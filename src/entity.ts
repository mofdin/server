class Entity {
  id: number

  x: number
  y: number

  speedX: number
  speedY: number

  constructor() {
    this.id = Math.floor(Math.random() * 100)
    this.x = 250
    this.y = 250
    this.speedX = 0
    this.speedY = 0
  }

  update() {
    this.updatePosition()
  }

  updatePosition() {
    this.x += this.speedX
    this.y += this.speedY
  }
}

export default Entity
