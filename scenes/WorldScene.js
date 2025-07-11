export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
  }

  preload() {
    // Load the exported map background image
    this.load.image('mapBackground', 'assets/maps/village_map.png');

    // Load the player sprite
    this.load.image('player', 'assets/player.png');
  }

  create() {
    // Add static background image to the scene
    this.add.image(0, 0, 'mapBackground').setOrigin(0, 0);

    // Add the player sprite
    this.player = this.physics.add.sprite(100, 100, 'player').setScale(0.3);
    this.player.setCollideWorldBounds(true);

    // Setup camera to follow player
    this.cameras.main.startFollow(this.player);

    // Set camera bounds to match background image size
    // Replace these numbers with the actual dimensions of your background_map.png
    this.cameras.main.setBounds(0, 0, 3000, 3000);

    // Set world bounds to match camera bounds so physics works correctly
    this.physics.world.setBounds(0, 0, 3000, 3000);

    // Enable arrow key input
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 200;

    // Reset velocity each frame
    this.player.setVelocity(0);

    // Movement handling
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
