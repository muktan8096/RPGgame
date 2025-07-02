import WorldScene from './scenes/WorldScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [WorldScene],
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  }
};

const game = new Phaser.Game(config);
