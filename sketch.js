var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
    }

function setup(){
    createCanvas(400,400);
    path=createSprite(200,200,50,50)
    path.addImage(pathImg)
    // Movendo o fundo 
    boy=createSprite(200,400,50,50)
    boy.addAnimation("boyImg",boyImg)
    boy.scale=0.08

    //Criando menino que corre 



    // Criando Boundary (Limite) esquerdo  
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;

    //Crie Boundary direito 
    rightBoundary=createSprite(400,100,100,800)
    rightBoundary.visible= false;
    }



function draw() {
    background(0);
    path.velocityY = 4;
    
    // Menino se movendo no eixo X com o mouse
    edges= createEdgeSprites();
    boy.collide(edges);

    boy.x=mouseX

    //Reiniciar o fundo
    if(path.y>400){
        path.y = path.height/4;    
    }

    boy.collide(rightBoundary)

    boy.collide(leftBoundary)
    drawSprites();

 }




