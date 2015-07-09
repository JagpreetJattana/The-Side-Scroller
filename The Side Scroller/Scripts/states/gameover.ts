module states {
    export class Gameover {

        constructor() {
            this.main();

        }
        public update() {
            city.update();
            stage.update();
        }

        private playagainbuttonclicked(event: createjs.MouseEvent) {
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

            //adding game over label
            gameoverlbl = new createjs.Bitmap(assets.loader.getResult("gameoverlbl"));
            game.addChild(gameoverlbl);

            //adding play again button
            playagainbutton = new objects.Button(assets.loader.getResult("playagainbutton"), 320, 330);
            game.addChild(playagainbutton);
            playagainbutton.on("click", this.playagainbuttonclicked);

            stage.addChild(game);

        }
    }

} 