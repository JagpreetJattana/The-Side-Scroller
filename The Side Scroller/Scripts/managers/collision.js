var managers;
(function (managers) {
    var Collision = (function () {
        //constructor of the class
        function Collision() {
        }
        //Public methods 
        //check teh colision between plane and other objects
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = plane.x;
            p1.y = plane.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((plane.height * 0.5 + gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    console.log("collision");
                    createjs.Sound.play(gameObject.soundString);
                    if (gameObject.name == "cloud") {
                        scoreboard.lives--;
                    }
                    if (gameObject.name == "island") {
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