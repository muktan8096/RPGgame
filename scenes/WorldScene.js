export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
  }

  preload() {
    // Load background and player image
    this.load.image('bg', 'assets/bg.png');         // Optional
    this.load.image('player', 'assets/player.png'); // Your placeholder character
  }

  create() {
    // Add background to center of screen
    this.add.image(400, 300, 'bg');

    // Add player sprite to center
    this.player = this.physics.add.sprite(400, 300, 'player').setScale(0.3);
    this.player.setCollideWorldBounds(true); // Don’t let player leave screen

    // Set up arrow key input
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Reset velocity every frame
    this.player.setVelocity(0);

    const speed = 200;

    // Move Left/Right
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
    }

    // Move Up/Down
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}
