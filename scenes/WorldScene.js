export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
  }

  preload() {
    // Load the map JSON with embedded tilesets
    this.load.tilemapTiledJSON('villageMap', 'assets/maps/village_map.json');

    // Load the matching images
    this.load.image('FieldsTileset(sec)', 'assets/maps/tilesets/FieldsTileset.png');
    this.load.image('Tileset2(sec)', 'assets/maps/tilesets/Tileset2.png');

    // Load the player sprite
    this.load.image('player', 'assets/player.png');
  }

  create() {
    const map = this.make.tilemap({ key: 'villageMap' });

    // Updated tileset names must match what’s inside your Tiled map
    const tileset1 = map.addTilesetImage('FieldsTileset(sec)', 'FieldsTileset(sec)');
    const tileset2 = map.addTilesetImage('Tileset2(sec)', 'Tileset2(sec)');

    // Create all the tile layers
    map.createLayer('Tile Layer 1', [tileset1, tileset2], 0, 0);
    map.createLayer('Tile Layer 2', [tileset1, tileset2], 0, 0);
    map.createLayer('Tile Layer 3', [tileset1, tileset2], 0, 0);
    map.createLayer('roads', [tileset1, tileset2], 0, 0);
    map.createLayer('Tile Layer 5', [tileset1, tileset2], 0, 0);

    // Add player
    this.player = this.physics.add.sprite(100, 100, 'player').setScale(0.3);
    this.player.setCollideWorldBounds(true);

    // Camera follow
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Keyboard input
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
