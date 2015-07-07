module objects {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    export class Colliding extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
                      
        }
        public update(): void {
            this.x = superman.x;
            this.y = superman.y; 
        }
      
    }
}  