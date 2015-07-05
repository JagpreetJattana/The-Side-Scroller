module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Plane extends objects.GameObject {
      

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
           
            this.soundString = "engine";
            this.x = 40;
            createjs.Sound.play(this.soundString, { "loop": -1 });

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position plane under mouse
        }
    }
} 