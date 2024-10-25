// Define the game configuration
var config = {
    type: Phaser.AUTO, // Phaser will use WebGL if available, otherwise Canvas
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Create a new Phaser Game instance
var game = new Phaser.Game(config);

// Preload assets (like images or sounds)
function preload() {
    this.load.image('sky', 'assets/images/sky.png');
    this.load.image('star', 'assets/images/star.png');
}

// Create game objects and set the stage
function create() {
    // Add background image
    this.add.image(400, 300, 'sky');
    
    // Add a star sprite
    this.star = this.physics.add.sprite(400, 300, 'star');
    
    // Add physics to the star (falling down due to gravity)
    this.star.setBounce(0.2);
    this.star.setCollideWorldBounds(true);
}

// Game loop, runs every frame
function update() {
    // Move the star with keyboard input
    if (this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.LEFT)) {
        this.star.setVelocityX(-160);
    } else if (this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.RIGHT)) {
        this.star.setVelocityX(160);
    } else {
        this.star.setVelocityX(0);
    }

    if (this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.UP) && this.star.body.touching.down) {
        this.star.setVelocityY(-330);
    }
}
