var Bg,backgroundImg;
var fighter,fighterImg;
var NPCImg,NPC;
var gameState = 0;
var x ;var c=0;
var lifeImage,lifeNPC,lifePC,life1 = 1,life2 = 1;

function preload()
{
backgroundImg = loadImage("assets/Bg.jpg");
fighterImg = loadAnimation("assets/PC.png");
NPCImg = loadImage("assets/NPC.png");
lifeImage = loadImage("assets/life.png")
}
function setup() 
{
createCanvas(windowWidth,windowHeight);

fighter = createSprite(270,500,20,60)
fighter.addAnimation('fight',fighterImg);
fighter.isAttacking = false;
fighter.isBlocking = false;

NPC = createSprite(1400,520,20,20)
NPC.addImage(NPCImg);
NPC.isBlocking = false;
NPC.isAttacking = false;

lifeNPC = new Lifetime();
lifePC = new Lifetime();
}

function draw() 
{
 background(backgroundImg);
 textSize(30);
 fill("red")
 stroke("black");

 if(keyCode == RIGHT_ARROW  && fighter.x <=1400)
  {
   fighter.x += 20;
  }
 if(keyCode == LEFT_ARROW && fighter.x >=270)
  {
   fighter.x -= 20;
  }  
 if(keyCode == UP_ARROW && fighter.isTouching(NPC))
  {
  fighter.isAttacking = true;
  attack();
  push();
  fill("red");
  stroke("black");
  text("You attacked..",width/2-70,height-600)
  textSize(20);
  pop();
  }
 if(keyCode == DOWN_ARROW && fighter.isTouching(NPC))
  {
  fighter.isBlocking = true;
  defend();
  push();
  fill("red");
  stroke("black");
  text("You blocked..",width/2-70,height-600)
  textSize(20);
  pop();
  }
 if(gameState == 0)
 {
  choice();
  life1=1;
  life2=1;
  fighter.isAttacking = false;
  fighter.isBlocking = false;
  NPC.isBlocking = false;
  NPC.isAttacking = false;
  gameState = 1;
  fighter.x = 270; 
 }
 lifeNPC.showLifeNPC();
 lifePC.showLifePC();
 if(c % 50 == 0)
 {
 if(num()==1 && fighter.isTouching(NPC))
  {
    NPC.isAttacking = true;
    attack();
    push();
    fill("red");
    stroke("black");
    text("The enemy attacked..",width/2-70,height-550)
    textSize(20);
    pop();
    //NPC.isAttacking = false;
  }
  else if(num()==0 && fighter.isTouching(NPC))
  {
    NPC.isBlocking = true;
    defend();
    push();
    fill("red");
    stroke("black");
    text("The enemy blocked..",width/2-70,height-550)
    textSize(20);
    pop();
   // NPC.isBlocking = false;
  }
}
c++;
if(gameState == 2)
{
  gameOver();
  gameState = 0;
}
drawSprites();
}
function attack()
{
  if(life1>=0 &&  fighter.isAttacking == true)
  {
    life1 -= 1;
  }
  if(life1<=0)
  {
    life1 = 0;
    gameState = 2;
  }
  if(life2>=0 &&  NPC.isAttacking == true)
  {
    life2 -= 1;
  }
  if(life2<=0)
  {
    life2 = 0;
    gameState = 2;
  }
}
function defend()
{
  if(fighter.isAttacking == true)
  {
    fighter.isAttacking = false;
  }
  if(NPC.isAttacking == true)
  {
    NPC.isAttacking = false;
  }
}
function choice() 
{
  swal(
    {
      title: `Attack or Defend`,
      text: "Up to Attack or Down to Defend",
      imageUrl:"https://studio.code.org/api/v1/animation-library/spritelab/nxFokH_nQeojqyi67RB4lRZ9xa6Y2v4E/category_tools/pick.png",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    }
  );
}
function num()
{
  x =  Math.round(random(0,1));
  return x;
}
function gameOver()
{
  if(life1==0 && life2>0)
  {
    swal(
      {
        title: `You won`,
        text: "Press OK to restart",
        imageUrl:"https://studio.code.org/api/v1/animation-library/gamelab/uSp3KcII347_Zfr44jFEQ_CpE4PSnOFM/category_fantasy/rpgcharacter_08.png",
        imageSize: "150x150",
        confirmButtonText: "OK"
      }
    );
  }
  else if(life2==0 && life1>0)
  {
    swal(
      {
        title: `You lost`,
        text: "Press OK to restart",
        imageUrl:"https://studio.code.org/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png",
        imageSize: "150x150",
        confirmButtonText: "OK"
      }
    );
  }
  else if(life1 == 0 && life2 == 0)
  {
    swal(
      {
        title: `You drew`,
        text: "Press OK to restart",
        imageUrl:"https://studio.code.org/api/v1/animation-library/gamelab/gRRypFLmc1bH.C1.ZIY1aMNN_dyN4wxJ/category_emoji/halloweenemoji_18.png",
        imageSize: "150x150",
        confirmButtonText: "OK"
      }
    );
  }
  gameState = 0;
}