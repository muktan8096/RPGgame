export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  preload() {
    // Show loading text
    this.add.text(300, 250, 'Loading...', { fontSize: '32px', color: '#ffffff' });

    // Here you'd normally load assets
    this.load.image('logo', 'assets/player.png'); // Just for demo

    // Simulate loading delay
    this.load.once('complete', () => {
      this.time.delayedCall(1000, () => {
        this.scene.start('MenuScene'); // Go to menu when done
      });
    });
    this.load.start();
  }

  create() {
    // Not used here, everything done in preload
  }
}
