export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.add.text(300, 100, 'My RPG Game', { fontSize: '40px', color: '#ffffff' });

    const startText = this.add.text(330, 200, '[ Start Game ]', { fontSize: '24px', color: '#00ff00' })
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start('CharacterGenderScene'); // Later change to CharacterCreationScene
      });

    const loadText = this.add.text(330, 250, '[ Load Game ]', { fontSize: '24px', color: '#00ffff' })
      .setInteractive()
      .on('pointerdown', () => {
        alert('Load game not implemented yet!');
      });
  }
}
