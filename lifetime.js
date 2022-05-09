class Lifetime
{
 constructor()
  {  
      
  }
 showLifeNPC() 
  {
    push();
    fill("#f50057");
    rect(1300, 50, 200, 20);
    fill("white")
    text(life1,1375,70)
    textSize(20);
    noStroke();
    pop();
  }
 showLifePC() 
  {
    push();
    fill("#f50057");
    rect(50, 50, 200, 20);
    fill("white")
    text(life2,125,70)
    textSize(20);
    noStroke();
    pop();
  }
 display()
  {
  
  }
}