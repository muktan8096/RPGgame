export default class CharacterFaceScene extends Phaser.Scene {
  constructor() {
    super('CharacterFaceScene');
  }

  init(data) {
    this.gender = data.gender;
    this.name = data.name;
  }

  create() {
    this.faceOptions = ['🙂', '😎', '😡', '😁', '🥸']; // You can change these later
    this.currentFace = 0;

    this.add.text(250, 50, 'Choose Your Face', {
      fontSize: '32px',
      color: '#ffffff'
    });

    // Face preview (centered)
    this.facePreview = this.add.text(370, 180, this.faceOptions[this.currentFace], {
      fontSize: '64px',
      color: '#ffffff'
    });

    // Left arrow
    this.add.text(300, 180, '<', {
      fontSize: '48px',
      color: '#00ffcc'
    }).setInteractive().on('pointerdown', () => {
      this.currentFace = (this.currentFace - 1 + this.faceOptions.length) % this.faceOptions.length;
      this.facePreview.setText(this.faceOptions[this.currentFace]);
    });

    // Right arrow
    this.add.text(440, 180, '>', {
      fontSize: '48px',
      color: '#00ffcc'
    }).setInteractive().on('pointerdown', () => {
      this.currentFace = (this.currentFace + 1) % this.faceOptions.length;
      this.facePreview.setText(this.faceOptions[this.currentFace]);
    });

    // Continue button
    this.add.text(300, 300, '[ Continue → ]', {
      fontSize: '28px',
      color: '#00ff99'
    }).setInteractive().on('pointerdown', () => {
      const face = this.faceOptions[this.currentFace];

      // Pass gender + name + face to next scene
      this.scene.start('CharacterClothesScene', {
        gender: this.gender,
        name: this.name,
        face: face
      });
    });
  }
}
