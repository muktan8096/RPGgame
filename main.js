import LoadingScene from './scenes/LoadingScene.js';
import MenuScene from './scenes/MenuScene.js';
import CharacterGenderScene from './scenes/CharacterGenderScene.js';
import CharacterNameScene from './scenes/CharacterNameScene.js';
import CharacterFaceScene from './scenes/CharacterFaceScene.js';
import CharacterClothesScene from './scenes/CharacterClothesScene.js';


import WorldScene from './scenes/WorldScene.js';







const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene:[LoadingScene,MenuScene,CharacterGenderScene,CharacterNameScene,CharacterFaceScene,CharacterClothesScene,WorldScene],
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  }
};

const game = new Phaser.Game(config);
