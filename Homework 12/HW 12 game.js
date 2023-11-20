

var characterx = 100;
var charactery = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var enemy1x = 30;
var enemy1y = 50;
var enemy1xspeed;
var enemy1yspeed;


var enemy2x = 30;
var enemy2y = 50;
var enemy2xspeed;
var enemy2yspeed;

var mouseShapeX;
var mouseShapeY;

function setup()
{
    fill(51);
    createCanvas(500, 600);
    shapexspeed = Math.floor(Math.random() * Math.floor(Math.random() * 5)) + 1;
    shapeyspeed = Math.floor(Math.random() * Math.floor(Math.random() * 5)) + 1;
}

function draw()
{
background (120,45,78);
stroke(0);
fill(51);

//call createborders function
createBorders();

clickEnemy();

createCharacter();

characterMovement();

Enemy1();

Enemy2();

mouseClicked1();

YouWinText();

ExitMessage();
}

function createCharacter()
{
//character
fill('#A251FA');
circle(characterx,charactery,25);
}

function characterMovement()
{
    //keys
if(keyIsDown(w))
{
    charactery -= 10;
}

if(keyIsDown(s))
{
    charactery += 10;
}

if(keyIsDown(a))
{
    characterx -= 10;
}

if(keyIsDown(d))
{
    characterx += 10;
}
}


function createBorders()
{
// top border
rect (0,0, width, 10);
// left border 
rect (0,0, 10, height);
//bottom border 
rect(0, height-10, width, 10);
// right upper border
rect (width-10, 0, 10, height-50);
}
   
function clickEnemy()
{
    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function Enemy1()
{
    fill('red');

    circle(enemy1x, enemy1y,10);
    
    enemy1xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemy1yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    enemy1x += shapexspeed;
    enemy1y += shapeyspeed;
    
    if(enemy1x > width)
    {
        enemy1x = 0;
    }
    
    if(enemy1x < 0)
    {
        enemy1x = width;
    }
    if(enemy1y > height)
    {
        enemy1y = 0;
    }
    if(enemy1y < 0)
    {
        enemy1y = height;
    }
}

function Enemy2()
{
    fill('#fae');

circle(enemy2x, enemy2y,30);

enemy2xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
mouseenemy2y = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

enemy2x += enemy2xspeed;
enemy2y += mouseenemy2y;

if(enemy2x > width)
{
    enemy2x = 0;
}

if(enemy2x < 0)
{
    enemy2x = width;
}
if(enemy2y > height)
{
    enemy2y = 0;
}
if(enemy2y < 0)
{
    enemy2y = height;
}
}

function YouWinText()
{
    if (characterx > width && charactery > width-50)
    {
    fill(0);
    stroke(5);
    textSize (26);
    text ("You Win!", width/2-50, height/2-50);
    }
}

function ExitMessage()
{
    //exit message
textSize (16);
text ("EXIT", width-50, height-50)
}

function mouseClicked1()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

   









