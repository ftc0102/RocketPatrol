//spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene,x,y,texture,frame);

        //add object to existing scene
        scene.add.existing(this);
        this.points = pointValue; //track points
        this.moveSpeed = game.settings.spaceshipSpeed; //pixels per frame
    }

    update(){
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around
        if(this.x <= 0 - this.width){
            this.reset();   
        }
    }

    //position reset
    reset(){
        this.x = game.config.width;
    }
}