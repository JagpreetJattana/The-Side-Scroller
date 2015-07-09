
module states {
    export class Menu {
        constructor() {
            this.main();

        }

        public update() {
            city.update();
            superman.update();
            stage.update();
        }

        private startbuttonclicked(event: createjs.MouseEvent) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            
            changeState(constants.PLAY_STATE);

        }


        main() {
            
            game = new createjs.Container();

            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);


            // add superman object to stage
            superman = new objects.Superman(assets.loader.getResult("superman"));
            game.addChild(superman);

            //adding instruction label
            menulbl = new createjs.Bitmap(assets.loader.getResult("menu"));
            game.addChild(menulbl);

            //adding start button
            startbutton = new objects.Button(assets.loader.getResult("startbutton"), 500, 330);
            game.addChild(startbutton);
            startbutton.on("click", this.startbuttonclicked);
            //adding game container to stage
            stage.addChild(game);

        }
    }


} 