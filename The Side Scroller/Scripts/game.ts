/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/city.ts" />
/// <reference path="objects/superman.ts" />
/// <reference path="objects/ring.ts" />
/// <reference path="objects/fireball.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />



// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;



var assets: createjs.LoadQueue;
var manifest = [
    { id: "Background", src: "assets/images/Background2.png" },
    { id: "superman", src: "assets/images/superman.png" },
    { id: "ring", src: "assets/images/ring.png" },
    { id: "fireball", src: "assets/images/enemy.png" },
    { id: "yay", src: "assets/audio/pickupcoin.wav" },
    { id: "thunder", src: "assets/audio/destroy.wav" },
    { id: "engine", src: "assets/audio/engine.ogg" },
];


// Game Variables
var city: objects.City;
var superman: objects.Superman;
var ring: objects.Ring;
var fireballs:objects.Fireball[] = [];
var scoreboard: objects.ScoreBoard;
//Game managers
var collision: managers.Collision;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    city.update();
    superman.update();
    ring.update();
    
    for (var ball = 0; ball < 3; ball++) {
        fireballs[ball].update();
        collision.check(fireballs[ball]);
       
    }
   collision.check(ring);
    scoreboard.update();
    stage.update();

    stats.end(); // end measuring
}



// Our Main Game Function
function main() {
    //adding ocean object to stage
    city = new objects.City(assets.getResult("Background"));
    stage.addChild(city);

    //add island object to stage
    ring = new objects.Ring(assets.getResult("ring"));
    stage.addChild(ring);

    // add plane object to stage
    superman = new objects.Superman(assets.getResult("superman"));
    stage.addChild(superman);

    // add 3 cloud objects to stage
    for (var ball = 0; ball < 3; ball++) {
        fireballs[ball] = new objects.Fireball(assets.getResult("fireball"));
        stage.addChild(fireballs[ball]);
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();

}