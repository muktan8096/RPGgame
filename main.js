import LoadingScene from './scenes/LoadingScene.js';
import MenuScene from './scenes/MenuScene.js';
import CharacterGenderScene from './scenes/CharacterGenderScene.js';
import CharacterNameScene from './scenes/CharacterNameScene.js';
import CharacterFaceScene from './scenes/CharacterFaceScene.js';
import CharacterClothesScene from './scenes/CharacterClothesScene.js';
import WorldScene from './scenes/WorldScene.js';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pixelArt: true,
  backgroundColor: '#000000',
  scene: [
    LoadingScene,
    MenuScene,
    CharacterGenderScene,
    CharacterNameScene,
    CharacterFaceScene,
    CharacterClothesScene,
    WorldScene
  ]
};

const game = new Phaser.Game(config);
