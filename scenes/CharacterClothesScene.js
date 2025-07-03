export default class CharacterClothesScene extends Phaser.Scene {
  constructor() {
    super('CharacterClothesScene');
  }

  init(data) {
    this.gender = data.gender;
    this.name = data.name;
    this.face = data.face;
  }

  create() {
    this.clothesOptions = ['🧥', '🎽', '🧛‍♂️', '👕', '🧙‍♂️']; // You can replace with sprites later
    this.currentClothes = 0;

    this.add.text(240, 50, 'Choose Your Clothes', {
      fontSize: '32px',
      color: '#ffffff'
    });

    // Clothes preview
    this.clothesPreview = this.add.text(370, 180, this.clothesOptions[this.currentClothes], {
      fontSize: '64px',
      color: '#ffffff'
    });

    // Left arrow
    this.add.text(300, 180, '<', {
      fontSize: '48px',
      color: '#00ffcc'
    }).setInteractive().on('pointerdown', () => {
      this.currentClothes = (this.currentClothes - 1 + this.clothesOptions.length) % this.clothesOptions.length;
      this.clothesPreview.setText(this.clothesOptions[this.currentClothes]);
    });

    // Right arrow
    this.add.text(440, 180, '>', {
      fontSize: '48px',
      color: '#00ffcc'
    }).setInteractive().on('pointerdown', () => {
      this.currentClothes = (this.currentClothes + 1) % this.clothesOptions.length;
      this.clothesPreview.setText(this.clothesOptions[this.currentClothes]);
    });

    // Final Continue button → to WorldScene
    this.add.text(300, 300, '[ Start Game → ]', {
      fontSize: '28px',
      color: '#00ff99'
    }).setInteractive().on('pointerdown', () => {
      const clothes = this.clothesOptions[this.currentClothes];

      // Pass ALL data to WorldScene
      this.scene.start('WorldScene', {
        gender: this.gender,
        name: this.name,
        face: this.face,
        clothes: clothes
      });
    });
  }
}
