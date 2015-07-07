module managers {
    export class Assets {
        //public properties
        public loader: createjs.LoadQueue;

        //private properties
        private manifest = [
            { id: "Background", src: "assets/images/Background2.png" },
            { id: "superman", src: "assets/images/superman.png" },
            { id: "ring", src: "assets/images/ring.png" },
            { id: "menu", src: "assets/images/menu.png" },
            { id: "startbutton", src: "assets/images/startbutton.png" },
            { id: "fireball", src: "assets/images/enemy.png" },
            { id: "yay", src: "assets/audio/pickupcoin.wav" },
            { id: "thunder", src: "assets/audio/destroy.wav" },
            { id: "engine", src: "assets/audio/engine.ogg" },
            { id: "colliding", src: "assets/images/colliding.png" },
        ];
        //constructor
        constructor() {
            this.preload();

        }

        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
        }

    }
}