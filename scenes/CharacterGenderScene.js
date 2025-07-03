export default class CharacterGenderScene extends Phaser.Scene {
  constructor() {
    super('CharacterGenderScene');
  }

  create() {
    // Title
    this.add.text(220, 50, 'Choose Your Gender', {
      fontSize: '32px',
      color: '#ffffff'
    });

    // Male option
    const maleOption = this.add.text(300, 150, '👨 Male', {
      fontSize: '28px',
      backgroundColor: '#333',
      padding: { x: 10, y: 5 },
      color: '#00ffff'
    })
    .setInteractive()
    .on('pointerdown', () => {
      this.scene.start('CharacterNameScene', { gender: 'Male' });
    });

    // Female option
    const femaleOption = this.add.text(300, 220, '👩 Female', {
      fontSize: '28px',
      backgroundColor: '#333',
      padding: { x: 10, y: 5 },
      color: '#ff99cc'
    })
    .setInteractive()
    .on('pointerdown', () => {
      this.scene.start('CharacterNameScene', { gender: 'Female' });
    });

    // (Optional) Add a non-binary option if you want
    // const otherOption = this.add.text(300, 290, '🧑 Other', {
    //   fontSize: '28px',
    //   backgroundColor: '#333',
    //   padding: { x: 10, y: 5 },
    //   color: '#cccccc'
    // })
    // .setInteractive()
    // .on('pointerdown', () => {
    //   this.scene.start('CharacterNameScene', { gender: 'Other' });
    // });
  }
}
