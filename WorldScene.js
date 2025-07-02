export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
  }
  preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('bg', 'assets/bg.png');
  }
  create() {
    this.add.image(400, 300, 'bg');
    this.player = this.physics.add.sprite(400, 300, 'player');
    this.player.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    const speed = 200;
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}
