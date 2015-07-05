module objects {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    export class Ocean extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
           

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if ocean has left screen
            if (this.x == -1280) {
                 this.reset();
            }
        }


        private reset(): void {
            this.x = 0; // start ocean at x axis
            this.y = 0; // start ocean off stage on y axis
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves ocean up the stage
            this.checkBounds();
        }
    }
}  