export default class CharacterNameScene extends Phaser.Scene {
  constructor() {
    super('CharacterNameScene');
  }

  init(data) {
    this.gender = data.gender; // Received from previous scene
  }

  create() {
    this.add.text(240, 100, 'Enter Your Name', {
      fontSize: '32px',
      color: '#ffffff'
    });

    const nameButton = this.add.text(260, 200, '[ Click to Enter Name ]', {
      fontSize: '24px',
      color: '#00ffcc',
      backgroundColor: '#333',
      padding: { x: 10, y: 5 }
    }).setInteractive();

    this.nameText = this.add.text(260, 260, 'Name: ', {
      fontSize: '24px',
      color: '#ffffff'
    });

    nameButton.on('pointerdown', () => {
      const name = prompt('Enter your name:');
      if (name) {
        this.name = name;
        this.nameText.setText('Name: ' + name);
      }
    });

    // Continue button
    this.add.text(300, 350, '[ Continue → ]', {
      fontSize: '28px',
      color: '#00ff99'
    }).setInteractive().on('pointerdown', () => {
      if (!this.name) {
        alert('Please enter your name!');
        return;
      }

      // Go to next scene and pass gender + name
      this.scene.start('CharacterFaceScene', {
        gender: this.gender,
        name: this.name
      });
    });
  }
}
