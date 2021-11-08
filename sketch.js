const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var options;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  options = {isStatic : true};

  //create player base body
 playerBase = Matter.Bodies.rectangle(200,300,150,150 , options)
 World.add(world , playerBase)
 
  //create player body
player = Matter.Bodies.rectangle(250,170,50,150, options)
World.add(world, player)


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image (playerimage , player.position.x ,player.position.y , 50,150 )



  //show the playerbase image using image() function
  image(baseimage , playerBase.position.x , playerBase.position.y , 150,150)



  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
