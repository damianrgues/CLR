//--------------------------//
//----   CONFIG FILE    ----//
//--------------------------//

// ------ GLOBAL Var -
var PLAYER_HEALTH = 100;
var PLAYER_SPEED  = 200;

var WAVE_SPEED    = 20; //MS for repeat interval ++ms = --speed
var WAVE_LENGTH   = 2000; //px for the wave pic

var FPS           = 30;
var DELTA_TIME    = FPS / 1000;

var RESET_COUNTER = 0;

// ------ Positions Control -

// ------ DOM Control -
var screenView = $("#screen");
var scoreView  = $("score");
var gameView   = $("#game");
var scoreView  = $("#scoreJS");
var timeView   = $("#timeDown");


// ------ Collisions -
