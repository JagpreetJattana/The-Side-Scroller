﻿module managers {
    export class Collision {

        //constructor of the class
        constructor() {

        }
        //Public methods 
        //check teh colision between plane and other objects
        
        public check(gameObject: objects.GameObject) {
           // var scoreboard: objects.ScoreBoard;
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        var flag: number=0;
        p1.x = superman.x;
        p1.y = superman.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;

        if (utility.distance(p1, p2) < ((superman.height * 0.5 + gameObject.height * 0.5))) {
            if (gameObject.isColliding == false) {
                console.log("collision");
                createjs.Sound.play(gameObject.soundString);
                if (gameObject.name == "fireball") {
                    scoreboard.lives--;
                    if (flag == 0) {
                        game.removeChild(superman);
                        colliding.update();
                        game.addChild(colliding);
                        flag = 1;
                    }
                    window.setTimeout(function () {
                        game.removeChild(colliding);
                        game.addChild(superman);
                        flag = 0;
                    }, 1400);
                }
                if (gameObject.name == "ring") {
                    scoreboard.score += 100;
                    //stage.removeChild(gameObject);
                }
            }
            gameObject.isColliding = true;
        }
        else {
            gameObject.isColliding = false;
        }

    }



    }

} 