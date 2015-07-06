var managers;
(function (managers) {
    var Collision = (function () {
        //constructor of the class
        function Collision() {
        }
        //Public methods 
        //check teh colision between plane and other objects
        Collision.prototype.check = function (gameObject) {
            // var scoreboard: objects.ScoreBoard;
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
                    }
                    if (gameObject.name == "ring") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map