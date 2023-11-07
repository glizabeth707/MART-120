
var headX = 250;
var headY = 100;
var headDirection;

var mouthX = 246;
var mouthY = 126;
var mouthDirection;

var bodyX = 200;
var bodyY = 160;
var bodyDirection;

var triangleX = 30;
var triangleY1 = 75;
var triangleY2 = 20;
var triangleY3 = 75;
var triangleDirection = 3;

var size = 27;
var count = 0;
var sizeDirection = 2;

var lefteyeX = 230;
var lefteyeY = 100;
var lefteyeDirection;

function setup()
            {
                createCanvas(500, 600);
                headDirection = floor(random() * 10);
                mouthDirection = floor(random() * 10);
                bodyDirection = floor(random() * 10);
                lefteyeDirection = floor(random() * 10);
            }

            function draw (draw)
            {
                fill('51');
                background(120, 45, 78);
                
                fill('rgba(100%,0%,100%,0.5)');
                circle(headX, headY, 100);
                headX+=headDirection;
                if(headX >= 418 || headX <= 82)
                {
                    headDirection *= -1;
                }
                {
                    headX += headDirection;
                }

                fill('#A251FA');
                rect(200,bodyY,100,150);
                bodyY += bodyDirection;
                if(bodyY <= 0 || bodyY >= 450 )
                {
                bodyDirection *= -1;
                }
                {
                bodyY += bodyDirection;
                }

                strokeWeight(10);
                
                point(lefteyeX, lefteyeY);
                lefteyeY += lefteyeDirection;
                if(lefteyeY <= 0 || lefteyeY >= 450 )
                {
                    lefteyeDirection *= -1;
                }
                {
                    lefteyeY += lefteyeDirection;
                }
                lefteyeX+=lefteyeDirection;
                if(lefteyeX >= 418 || lefteyeX <= 82)
                {
                    lefteyeDirection *= -1;
                }
                {
                    lefteyeX += lefteyeDirection;
                }
                
                point(260, 100);
               
                triangle(triangleX, triangleY1, 58, triangleY2, 86, triangleY3);
                triangleY1 += triangleDirection;
                if(triangleY1 <= 0 || triangleY1 >= 450 )
                {
                triangleY1 += triangleDirection;
                }
                triangleY2 += triangleDirection;
                if(triangleY2 <= 0 || triangleY2 >= 450 )
                
                {
                triangleY2 += triangleDirection;
                }
                triangleY3 += triangleDirection;
                if(triangleY3 <= 0 || triangleY3 >= 450 )
                
                {
                triangleY3 += triangleDirection;
                }
                
                circle(mouthX, mouthY, 20);
                mouthX+=mouthDirection;
                if(mouthX >= 418 || mouthX <= 82)
                {
                    mouthDirection *= -1;
                }
                {
                mouthX += mouthDirection;
                }

                line(200, 170, 85, 75);
                
                line(300, 170, 85, 175);
                
                line(200, 300, 200, 400);
                
                line(300, 400, 300, 300);
                
                textSize(size);
                text('Gwendelyn FC', 300, 430);
                size+= sizeDirection;
                count++;
                 if(count > 5)
                {
                sizeDirection *=-1;
                count = 0;
                }
                
            }
            