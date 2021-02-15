var gamestate=1;
var game=0;
var coins=0;
var s0=0,s1=0,s3=0,s4=0,s5=0,s6=0,s7=0,s8=0,s9=0,s10=0;
var s11=0,s12=0,s13=0,s14=0,s15=0,s16=0,s17=0,s18=0,s19=0,s20=0;
var s21=0,s22=0,s23=0,s24=0,s25=0;
var t1=0,t4=0,t7=0,t8=0,t9=0,t10=0,t11=0,t13=0,t14=0,t19=0,t25=0;
var t22=0,t23=0,t17=0,t18=0;
var npc7d=0;
var p=0;
var g=0,a1=0,a2=0,j1=0,j2=0,i=0,i2=0,k=0,gm=0,f=0;

function preload(){
    img1=loadImage("i/2182.jpg") 
    img2=loadImage("i/Page1_1.png") 
    img3=loadImage("i/320b14f35c23c6109bb6e06cafdb644e.jpg")
    img4=loadImage("i/60d752761cb8aa72811e1e9a8e6af706.jpg")
    img5=loadImage("i/3a57e16f320bbcadedb4d4744299466e.jpg")
    img18=loadImage("i/riverbank_by_allrichart_dcjzffw-350t.jpg")
    img6=loadImage("i/4ad36d0546af9cc91645a84b46366687.jpg")
    img7=loadImage("i/fatecraft_port_town_by_tyleredlinart_d6kzrmg-350t.jpg")
    img8=loadImage("i/e9818caf96b27dcc8f169c619b20c919.jpg")
    img9=loadImage("i/UN13VKD.jpg")
    img10=loadImage("i/53874a84e359a625348a355f19db1f2c.jpg")
    img11=loadImage("i/5d42e33de567ee9ba4dd4837ecb08966.jpg")
    img12=loadImage("i/8ae5f828ba36a0dad0084d2aa796e399.jpg")
    img13=loadImage("i/e4cb6a37d7ecc55a3a35c15bc8bcfcdc.jpg")
    img14=loadImage("i/3744f34ca343b53b2b00e1d8b62c41be.jpg")
    img15=loadImage("i/7d5ec8420bccbad1ece6efec15e32df8.jpg")
    img16=loadImage("i/7cc9fd997392378c89613e983aa1361a.jpg")
    img17=loadImage("i/164706c5a3919751a0d322b6ca461664.jpg")
    img19=loadImage("i/9f5c60ebaf7a9e9a85acb1975554bf28.jpg")
    img20=loadImage("i/oleh-yolchiiev-15.jpg")
    img21=loadImage("i/8ae5f828ba36a0dad0084d2aa796e399.jpg")
    img22=loadImage("i/9c66beb0abcaedd054e2de1253c4e2ea.jpg")
    img23=loadImage("i/istockphoto-607477044-612x612.jpg")
    img24=loadImage("i/a0d88cab70c6d58bc8a1262d0d263dc4.jpg")
    img25=loadImage("i/omiro-mironishin-028-secret-room-all-copy-by-omiro-d81b1er.jpg")
    img26=loadImage("i/32254bdb72b2477224edbcfd2e6228d7.jpg")

  npc1img=loadImage("i/bfc-nobleman_230c3aecea.png")
  npc2img=loadImage("i/a4de0490f550ed08181151689f9bf967.png")
  npc3img=loadImage("i/aa0face0b228dd5b32da242bf45c0d4d.png")
  npc4img=loadImage("i/110f99ddead71907ab31184de4a086f8.png")
  npc5img=loadImage("i/d10c27bd5175aac46438aa057b28dbc5.png")
  npc6img=loadImage("i/c6b191ae318c22457c115fa04198c675.png")
  npc7img=loadImage("i/3ecdbd4f139284b95a4c934fca2ec4ff.png")
  npc8img=loadImage("i/a2fe4d56021defc825d8fa8f7ccd1409.png")
  npc9img=loadImage("i/156308389c949d222483b332efbbde10.png")
  npc10img=loadImage("i/11ba35d1d49cc396c406bbd83c4cdbb8.png")
  npc11img=loadImage("i/674fed97d54b00b37ac1bd35eb75c545.png")
  npc12img=loadImage("i/9167309c9b0bc5fc3750339e38aaff80.png")
  npc13img=loadImage("i/72306647b27e8c681990e47b0f26add8.png")
  npc14img=loadImage("i/156308389c949d222483b332efbbde10.png")
 npc15img=loadImage("i/a2fe4d56021defc825d8fa8f7ccd1409.png")
  npc16img=loadImage("i/b33245e17e91019e2d4c20a57afdadbc.png")
  npc17img=loadImage("i/be71bfbdb9a3b2f8f1f1d1ebd7e4e395.png")
  npc18img=loadImage("i/e21837d3c588d2dc3861476b33bb761c.png")
  npc19img=loadImage("i/ec97299070d23aadbdcd9368f1f53b75.png")
  npc20img=loadImage("i/a839f6e79b8a303c06f6010012b9d08b.png")
    npc21img=loadImage("i/edf16488d6f03dc8fd205b70d606e316.png")
    npc22img=loadImage("i/99abbd24788155ddb9701233b902fd23.png")
    npc23img=loadImage("i/e40b4054b8251370f3cd28606f508f73.png")
    
    mcimg=loadImage("i/c791f4e74e64ffde29cf58c8d51a8526.png")

    boatimg=loadImage("i/purepng.com-wooden-boatboatwatercraftfloatplanesmall-vesselinflatable-1701528448779opeug.png")
    doorimg=loadImage("i/rzlq58_large.png")
    bookimg=loadImage("i/learn-4759967_1280.webp")
    goatimg=loadImage("i/32ee57f310b84ddc92d332399fbafeb2.png")
    pillarimg=loadImage("i/74fc6e5be002a9424c3e205dd6131bbb (1).png")

    r1img=loadImage("i/r1.png")
    r2img=loadImage("i/r2.png")
    r3img=loadImage("i/r3.png")
    r4img=loadImage("i/r4.png")
}
function setup(){
    createCanvas(700, 500);

    bg=createSprite(350,250,800,800)
    bg.addImage("bg4",img4)
     bg.addImage("bg",img1)
     bg.addImage("bg2",img2)
     bg.addImage("bg3",img3)
     bg.addImage("bg5",img5)
     bg.addImage("bg6",img6)
     bg.addImage("bg8",img8)
     bg.addImage("bg7",img7)
     bg.addImage("bg18",img18)
     bg.addImage("bg9",img9)
     bg.addImage("bg10",img10)
     bg.addImage("bg11",img11)
     bg.addImage("bg12",img12)
     bg.addImage("bg13",img13)
     bg.addImage("bg14",img14)
     bg.addImage("bg15",img15)
     bg.addImage("bg16",img16)
     bg.addImage("bg17",img17)
     bg.addImage("bg19",img19)
     bg.addImage("bg20",img20)
     bg.addImage("bg21",img21)
     bg.addImage("bg22",img22)
     bg.addImage("bg23",img23)
     bg.addImage("bg24",img24)
     bg.addImage("bg25",img25)
     bg.addImage("bg26",img26)
     bg.scale=2.8

     boat=createSprite(100,360,50,50)
     boat.addImage("b",boatimg)
     boat.scale=0.13
     boat.flip=false

     book=createSprite(700,450,50,50)
     book.addImage("b",bookimg)
     book.scale=0.08

     door=createSprite(130,260,50,50)
     door.addImage("d",doorimg)
     door.scale=0.2

     pillar1=createSprite(100,250,10,10)
     pillar2=createSprite(260,250,10,10)
     pillar3=createSprite(450,250,10,10)
     pillar4=createSprite(600,250,10,10)
     pillar1.addImage("p",pillarimg)
     pillar2.addImage("p",pillarimg)
     pillar3.addImage("p",pillarimg)
     pillar4.addImage("p",pillarimg)
     pillar1.scale=3
     pillar2.scale=3
     pillar3.scale=3
     pillar4.scale=3

//     npc1=createSprite(100,300,50,100)
//     npc1.addImage("n",npc1img)
//     npc1.scale=0.9
//     npc2=createSprite(200,300,50,100)
//     npc2.addImage("n",npc2img)
//     npc2.scale=0.4
     npc3=createSprite(100,300,70,100)
     npc3.addImage("n",npc3img)
     npc3.scale=0.4
//     npc4=createSprite(500,300,50,100)
//     npc4.addImage("n",npc4img)
//     npc4.scale=0.6
     npc5=createSprite(200,330,70,50)
     npc5.addImage("n",npc5img)
     npc5.scale=0.75
     npc6=createSprite(100,300,70,100)
     npc6.addImage("n",npc6img)
     npc6.scale=0.6
     npc7=createSprite(350,340,70,100)
     npc7.addImage("n",npc7img)
     npc7.scale=0.14
     npc8=createSprite(500,320,70,150)
     npc8.addImage("n",npc8img)
     npc8.scale=0.13
     npc9=createSprite(100,300,70,150)
     npc9.addImage("n",npc9img)
     npc9.scale=0.5
     npc10=createSprite(640,330,70,150)
     npc10.addImage("n",npc10img)
     npc10.scale=0.43
     npc11=createSprite(550,280,70,150)
     npc11.addImage("n",npc11img)
     npc11.scale=0.67
     npc12=createSprite(540,350,70,150)
     npc12.addImage("n",npc12img)
     npc12.scale=0.16
     npc13=createSprite(500,300,70,150)
     npc13.addImage("n",npc13img)
     npc13.scale=0.3
     npc14=createSprite(100,300,70,150)
     npc14.addImage("n",npc14img)
     npc14.scale=0.6
     npc15=createSprite(100,300,70,150)
     npc15.addImage("n",npc15img)
     npc15.scale=0.6
     npc16=createSprite(620,350,70,100)
     npc16.addImage("n",npc16img)
     npc16.scale=0.65
     npc17=createSprite(260,310,70,150)
     npc17.addImage("n",npc17img)
     npc17.scale=0.23
     npc18=createSprite(70,350,70,150)
     npc18.addImage("n",npc18img)
     npc18.scale=0.15
     npc19=createSprite(100,300,70,150)
     npc19.addImage("n",npc19img)
     npc19.scale=0.6
     npc20=createSprite(270,350,70,150)
     npc20.addImage("n",npc20img)
     npc20.scale=0.51
     npc21=createSprite(340,260,70,150)
     npc21.addImage("n",npc21img)
     npc21.scale=0.265
     npc22=createSprite(520,330,70,150)
     npc22.addImage("n",npc22img)
     npc22.scale=0.39
     npc23=createSprite(280,320,70,150)
     npc23.addImage("n",npc23img)
     npc23.scale=0.32

     door1=createSprite(500,310,40,100)
     door2=createSprite(450,310,40,100)
     door3=createSprite(280,300,100,100)
     door4=createSprite(660,300,50,70)
     door5=createSprite(160,250,100,200)
     door6=createSprite(330,250,50,100)
     door7=createSprite(60,340,50,100)
     door8=createSprite(400,250,50,50)
     door9=createSprite(470,200,100,50)
     door10=createSprite(120,330,70,70)
     door11=createSprite(650,40,50,50)
     door12=createSprite(550,330,100,50)
     door13=createSprite(110,200,50,50)
     door14=createSprite(240,200,50,50)
     door15=createSprite(180,120,50,20)
     door16=createSprite(590,200,50,50)
     door17=createSprite(650,270,50,50)

     mc=createSprite(100,340,50,200)
     mc.addImage("mc",mcimg)
     mc.scale=0.35;

     goat=createSprite(160,430,50,50)
     goat.addImage("d",goatimg)
     goat.scale=0.1
     goat.x=mc.x+60

    rune1=createSprite(100,300,70,70)
     rune1.addImage("r",r1img)
     rune1.scale=1
    rune2=createSprite(260,300,70,70)
     rune2.addImage("r",r2img)
     rune2.scale=1
    rune3=createSprite(450,300,70,70)
     rune3.addImage("r",r3img)
     rune3.scale=1
    rune4=createSprite(600,300,70,70)
     rune4.addImage("r",r4img)
     rune4.scale=1

}
function draw(){ 
if(game===0){
    background(0)
    drawSprites()
    textSize(18)
    stroke("black")
    strokeWeight(4)
    fill("white")
    text("Coins:"+coins,10,30)
    move()
if(keyDown("space")){gamestate=8}
if(keyDown("v")){gamestate=16}
console.log(gamestate)
door1.visible=false
door2.visible=false
door3.visible=false
door4.visible=false
door5.visible=false
door6.visible=false
door7.visible=false
door8.visible=false
door9.visible=false
door10.visible=false
door11.visible=false
door12.visible=false
door13.visible=false
door14.visible=false
door15.visible=false
door16.visible=false
door17.visible=false

//npc1.visible=false
//npc2.visible=false
npc3.visible=false
//npc4.visible=false
npc5.visible=false
npc6.visible=false
npc7.visible=false
npc8.visible=false
npc9.visible=false
npc10.visible=false
npc11.visible=false
npc12.visible=false
npc13.visible=false
npc14.visible=false
npc15.visible=false
npc16.visible=false
npc17.visible=false
npc18.visible=false
npc19.visible=false
npc20.visible=false
npc21.visible=false
npc22.visible=false
npc23.visible=false

door.visible=false
book.visible=false
boat.visible=false 
if(g===0){
goat.visible=false}
if(g===1){
    goat.visible=true
}
    pillar1.visible=false 
    pillar2.visible=false 
    pillar3.visible=false 
    pillar4.visible=false 
    rune1.visible=false 
    rune2.visible=false 
    rune3.visible=false 
    rune4.visible=false 
} 
if(gamestate===0){
    mc.visible=false
    bg.changeImage("bg26",img26)
    bg.scale=0.25
    mc.y=360
    pillar1.visible=true
    pillar2.visible=true
    pillar3.visible=true
    pillar4.visible=true
    rune1.visible=true
    rune2.visible=true
    rune3.visible=true
    rune4.visible=true
    var op=createSprite(360,460,60,20)
    op.visible=false
    textSize(18)
    fill("white")
    stroke("black")
    strokeWeight(3)
     text("(exit)",340,465)
     if(mousePressedOver(op)){gamestate=2
    mc.x=200}
    if(t1===1){
    if(mousePressedOver(rune1)){s0=1}
    if(mousePressedOver(rune2)){s0=2}
    if(mousePressedOver(rune3)){s0=3}
    if(mousePressedOver(rune4)){s0=4}}
    if(s0===1){
    text("(50 coins)",330,400)
    var op=createSprite(360,440,60,20)
    op.visible=false
    text("Okay",340,445)
    if(mousePressedOver(op)){s0=0
    coins=coins+50
    npc3.x=-50
    t1=3}   
    }
    if(s0===2){
        text("(30 coins)",330,400)
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay",340,445)
        if(mousePressedOver(op)){s0=0
        coins=coins+30
        npc3.x=-50
        t1=3}
    }
    if(s0===3){
        text("(30 coins)",330,400)
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay",340,445)
        if(mousePressedOver(op)){s0=0
        coins=coins+30
        npc3.x=-50
        t1=3}
    }
    if(s0===4){
        text("(30 coins)",330,400)
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay",340,445)
        if(mousePressedOver(op)){s0=0
        coins=coins+30
        npc3.x=-50
        t1=3}
    }
}
if(gamestate===1){
   // console.log(s1)
    npc3.visible=true
    bg.changeImage("bg",img1)
    bg.scale=0.25
    bg.x=470
if(mc.x>700){mc.x=690}
if(mc.x<0){mc.x=650
gamestate=2}
if(t1===3){s1===3}
if(s1===0){
    var op=createSprite(360,460,60,20)
    op.visible=false
    textSize(18)
    fill("white")
    stroke("black")
    strokeWeight(3)
     text("I'm glad you have come to our aid. The kingdom of Cordonia needs your help. The four",1,420)
     text("kingdoms have left our kingdom in ruins, what is left of it has come together.",10,440)
     fill("yellow")
     text("Okay",340,465)
     if(mousePressedOver(op)){s1=1}   
}
if(s1===1){
    var op=createSprite(360,440,60,20)
    op.visible=false
    textSize(18)
    fill("white")
    stroke("black")
    strokeWeight(3)
     text("We want you to accept the four kingdoms' invitation, go to Stormhold and collect",10,360)
     text("information. First, you will need some coins. Go to the passage outside and find",10,380)
     text("the four pillars with runes enscribed on them. The one with the F-shaped rune has",10,400)
     text("the ,most coins behind it. Our kingdom's future is in your hands.",10,420)
     fill("yellow")
     text("Okay",340,445)
     if(mousePressedOver(op)){s1=2
                              t1=1}   
}
if(s1===2){
    if(mc.x<10){gamestate=2
    mc.x=670}
    if(mc.x>700){mc.x=690}
}
if(s1===3){
textSize(18)
text("Now go, find a boatsman who is willing to take you to Jade Town at the river in the ",10,380)
     text("forest outside this village. Try to help the refugees along the way. The means by which",10,400)
     text("you will send information will be revealed later. All of Cordonia is counting on you, good luck!",10,420)
    var op=createSprite(360,440,60,20)
    op.visible=false  
    fill("yellow")
     text("Okay",340,445)
     if(mousePressedOver(op)){s1=2
                              t1=4}   
}
}
if(gamestate===2){
  bg.changeImage("bg6",img6)
  bg.scale=0.84
  bg.x=350
  if(mousePressedOver(door1)){gamestate=3}
  if(mc.x<0){gamestate=0}
  if(mc.x>700)  {gamestate=1
    mc.x=50}
  mc.visible=true
  textSize(16)
    fill("white")
    stroke("black")
    strokeWeight(3)
  text("(exit)",485,320)
}
if(gamestate===3){
    //if(keyDown("q")){t7=1}
    //console.log(f)
    stroke("black")
    strokeWeight(3)
    bg.changeImage("bg2",img2)
    bg.scale=1.05
    bg.y=250
    bg.x=350
    if(mousePressedOver(door2)){gamestate=2} 
    if(mc.x<10){gamestate=4
    mc.x=150}
    if(mc.x>700){mc.x=690} 
    textSize(16)
    fill("white") 
    text("(castle)",430,320) 
    if(s3===0&&f!==2){
    if(t7===1){ 
        fill("yellow")
        text("(search)",150,350)
        text("(search)",340,430)
        text("(search)",620,450)
        text("(search)",570,320)
        var op1=createSprite(630,450,50,50)
        var op2=createSprite(180,350,50,50)
        var op3=createSprite(350,420,50,50)
        var op4=createSprite(600,320,50,50)
        op1.visible=false
        op2.visible=false
        op3.visible=false
        op4.visible=false
        if(mousePressedOver(op1)){s3=1}
        if(mousePressedOver(op2)){s3=2}
        if(mousePressedOver(op3)){s3=3}
        if(mousePressedOver(op4)){s3=4}   
        textSize(18) 
        }}
        if(s3===1){
        text("(Vegetables)",250,400)
        var op=createSprite(360,460,60,20)
        op.visible=false
        fill("yellow")
        text("(Take it)",340,465)
        if(mousePressedOver(op)){s3=0 
        f=f+1
        } }
        if(s3===2){
            text("(Grains)",290,400)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("(Take it)",340,465)
            if(mousePressedOver(op)){s3=0
                f=f+1
            }     
        } 
        if(s3===3){
            text("(Rotten fruits)",340,400)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("Okay",340,465)
            if(mousePressedOver(op)){s3=0}     
        } 
        if(s3===4){
            text("(Empty Pots)",200,400)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("Okay",340,465)
            if(mousePressedOver(op)){s3=0
            }     
        }       
}
if(gamestate===4){ 
    bg.changeImage("bg3",img3)
   npc10.visible=true  
    bg.scale=1.2
    bg.x=500
    bg.y=230
    if(mc.x<0){gamestate=3
        mc.x=150
         s4=0}
    if(mc.x>670){gamestate=5
        mc.x=50
        s4=0} 
        if(mousePressedOver(npc10)){s4=1}
        textSize(18)
        fill("white") 
        stroke("black")
        strokeWeight(3)
    if(s4===1){ 
        if(t4===0||t4===1){text("Hello there! Would you mind helping out an old man?",130,415) 
        fill("yellow")
        text("Not now.",250,440)
        text("Sure.",400,440)
        op1=createSprite(290,440,50,20)
        op2=createSprite(420,440,50,20)
        op1.visible=false
        op2.visible=false
        if(mousePressedOver(op1)){s4=0}
        if(mousePressedOver(op2)){s4=2}}
        if(t4===2){
            text("Thankyou for your help. Here are some coins for you.",200,410)
            fill("yellow")
            strokeWeight(3)
            var op=createSprite(360,440,60,20)
            op.visible=false
            text("Okay.",340,445)
            if(mousePressedOver(op)){s19=0
                coins=coins+30
                                    t4=3}        
        }
    }
    if(s4===2){
        text("There's no one left here and I have to move soon too but I don't have enough energy",10,415)
        text("get me some rabbits from the forest nearby. I'll pay you with all I have left.",10,435)
    fill("yellow")
    var op=createSprite(360,460,60,20)
    op.visible=false
    text("Okay",340,465)
    if(mousePressedOver(op)){s4=0
    t4=1}   
    }
}
if(gamestate===5){
    console.log(s5)
    console.log(t4)
    bg.changeImage("bg4",img4)
    bg.scale=1.3
    bg.x=350
    if(mc.x<10){gamestate=4
        mc.x=660}
    if(mc.x>700){gamestate=6
        mc.x=10}  
        var op=createSprite(400,250,150,50)
        op.visible=false
        if(t4===1){
        text("(Hunt for rabbits)",330,250)
        if(mousePressedOver(op)){s5=1}
    }
    if(s5===1){
         fill("yellow")
         strokeWeight(3)
         var op=createSprite(360,460,60,20)
         op.visible=false
         text("Okay",340,465)
         if(mousePressedOver(op)){s5=0
                                    t4=2}     
    }      
}
if(gamestate===6){
    bg.changeImage("bg5",img5)
    bg.scale=1
    bg.x=400
    if(mc.x<10){gamestate=5
        mc.x=690}
    if(mc.x>700){mc.x=690} 
    if(mousePressedOver(door3)){gamestate=7
    mc.x=50} 
    textSize(16)
    fill("white") 
    stroke("black")
    strokeWeight(3)
    text("(river)",270,270)  
}
if(gamestate===7){
    textSize(18)
    fill("white") 
    stroke("black")
    strokeWeight(3)
    bg.changeImage("bg18",img18)
    bg.scale=1.45
    bg.y=260
    bg.x=200
    boat.visible=true
    npc21.visible=true
    if(mc.x>700){mc.x=690}
    if(mc.x<0){mc.x=350
    gamestate=6}
    if(mousePressedOver(npc21)){s7=1}
    if(s7===1){
    if(f<2)  {  text("Hello there! Do you want a ride to Jade Town of the Four Kingdoms?",10,415) 
        fill("yellow")
        text("Not now.",250,440)
        text("Sure.",400,440)
        op1=createSprite(290,440,50,20)
        op2=createSprite(420,440,50,20)
        op1.visible=false
        op2.visible=false
        if(mousePressedOver(op1)){s7=0}
        if(mousePressedOver(op2)){s7=2}   }
        if(f===2){
            text("Very well then, shall we leave for Jade town?",10,415) 
            fill("yellow")
            text("Not now.",250,440)
            text("Sure.(-50 coins)",400,440)
            op1=createSprite(290,440,50,20)
            op2=createSprite(420,440,50,20)
            op1.visible=false
            op2.visible=false
            if(mousePressedOver(op1)){s7=0}
            if(mousePressedOver(op2)&&coins>49){s7=0
            gamestate=8
        mc.x=200}    
        }
    }
    if(s7===2){
        text("Alright then. But we'll need some food for the journey. Go get anything you can",10,415)
        text("find from the town square, I'm sure you'll find. Come back when you're done.",10,435)
    fill("yellow")
    var op=createSprite(360,460,60,20)
    op.visible=false
    text("Okay",340,465)
    if(mousePressedOver(op)){s7=0
    t7=1}       
    }
}
if(gamestate===8){
    npc12.visible=true
    npc21.visible=true
    npc21.x=100
    npc21.y=290
    npc21.scale=0.25
    bg.changeImage("bg7",img7)
    bg.scale=1.55
    bg.x=340
    bg.y=250
    if(mc.x>700){gamestate=9
        mc.x=50}
        if(mc.x<0){mc.x=10} 
        if(mousePressedOver(door8)){gamestate=14
            mc.x=50}
        stroke("black")
        strokeWeight(4)
        fill("white")
        textSize(16)
        text("(street)",380,260)
        textSize(18)
        if(mousePressedOver(npc21)){s8=1 }
        if(mousePressedOver(npc12)&&t8!==5){
            if(g===0){s8=2 }
            if(g===1){s8=4}}
if(s8===1){
    strokeWeight(4)
text("I think you should explore the city for awhile, Come to me when you're ready to go to",10,420)
  text("the castle.",440,100)   
  fill("yellow")
  strokeWeight(3)
  text("I'll come back later.",180,445)
  text("I'm ready.(-100 coins)",370,445)
  op1=createSprite(240,440,90,20)
  op2=createSprite(420,440,90,20)
  op1.visible=false
  op2.visible=false
  if(mousePressedOver(op1)){s8=0}
  if(mousePressedOver(op2)&&coins>99){gamestate=16
    coins=coins-100}   
   }
if(s8===2){
    text("Hey traveller, can you please help me out?",10,415) 
    fill("yellow")
    strokeWeight(3)
    text("Not now.",250,440)
    text("Sure.",400,440)
    op1=createSprite(290,440,50,20)
    op2=createSprite(420,440,50,20)
    op1.visible=false
    op2.visible=false
    if(mousePressedOver(op1)){s8=0}
    if(mousePressedOver(op2)){s8=3}   
}
if(s8===3){
    text("I lost my goat somewhere in the town. Can you find it and bring it to me?",10,415)
    text("I'll pay you.",10,435)
fill("yellow")
strokeWeight(3)
var op=createSprite(360,460,60,20)
op.visible=false
text("Okay",340,465)
if(mousePressedOver(op)){s8=0
                        t8=1}           
}
if(s8===4){
    fill("white")
    text("Thankyou so much. Here are your coins.",10,415)
   // text("I'll pay you.",10,435)
fill("yellow")
strokeWeight(3)
var op=createSprite(360,460,60,20)
op.visible=false
text("Okay",340,465)
if(mousePressedOver(op)){s8=0
    coins=coins+40
    goat.x=550
    gm=1
                        t8=5}           
}
}
if(gamestate===9){
    goat.visible=false
   // console.log(i2)
    npc7.visible=true
    if(a2===1){npc7.visible=false}
    if(npc7.x<10){
        npc7.depth=bg.depth-1
    npc7.x=100
npc7.velocityx=0}
    bg.changeImage("bg8",img8)
    bg.scale=1.055
    bg.x=400   
    if(mc.x<0){gamestate=8
              mc.x=670} 
              if(mc.x>700){mc.x=690
                if(a1===1){a2===1}} 
    if(mousePressedOver(door4)){gamestate=10
        mc.x=350
    if(a1===1){a2===1}}
    textSize(16)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("(street)",630,280)
    if(mousePressedOver(npc7)&&s9===0&&a1===0){s9=1}
    textSize(18)
    if(s9===1){
        op1=createSprite(190,440,200,20)
        op2=createSprite(500,440,200,20) 
        op3=createSprite(190,470,200,20)
        op4=createSprite(500,470,200,20) 
        op1.visible=false
        op2.visible=false
        op3.visible=false
        op4.visible=false
        text("Yes?",320,400)
        fill("yellow")
        if(t9===0){
            text("Do you have any work for me?",70,440)
            if(mousePressedOver(op1)){s9=2}}
        if(t9===2){
            text("I got the potion materials.",70,440)
            if(mousePressedOver(op1)){s9=7}}
        if(t8===1){text("Did you see any goat around here?",400,440) 
        if(mousePressedOver(op2)){s9=3}      }
        if(t17===1){text("I have a potion for you",350,480)
        if(mousePressedOver(op4)){s9=4}}
        text("Nothing.",140,480)
        if(mousePressedOver(op3)){s9=0}  
    }
    if(s9===2){
        text("Yes, I need ingredients to make new potions. Get me Fermented Spider Eye,",10,415) 
        text("Glowstone dust, Blaze powder and the most important one... sugar.",10,435)
        fill("yellow")
        t9=1
        var op=createSprite(360,460,60,20)
        op.visible=false
        text("Okay",340,465)
        if(mousePressedOver(op)){s9=0
                              }          
    }
    if(s9===7){
        if(i2==0)  {  text("Well you didn't get anything that I needed but you can have 10 coins anyways.",10,435) 
        // text("Glowstone dust, Blaze powder and the most important one... sugar.",10,435)
         fill("yellow")
         t9=1
         var op=createSprite(360,460,60,20)
         op.visible=false
         text("Okay",340,465)
         if(mousePressedOver(op)){s9=0
                               coins=coins+10
                             t9=3}    }      
    if(i2>0)  {  text("Thankyou, Let's talk again later.",10,435) 
       // text("Glowstone dust, Blaze powder and the most important one... sugar.",10,435)
        fill("yellow")
        t9=1
        var op=createSprite(360,460,60,20)
        op.visible=false
        text("Okay",340,465)
        if(mousePressedOver(op)){s9=0
                              coins=coins+(i*10)
                            t9=3}    }      
    }
    if(s9===3){
        text("No, but I think I saw one running towards that street.",10,415) 
        fill("yellow")
        var op=createSprite(360,460,60,20)
        op.visible=false
        text("Okay",340,465)
        if(mousePressedOver(op)){s9=0}    
    }
    if(s9===4){
    text("Are you sure you want me to drink this. Or is there something you want to tell me?",10,420)
    fill("yellow")
    text("Yeah, its for increasing productivity to help you with your increased sales.",10,440)
    text("No, actually I do have something to tell you.",100,460)
    op3=createSprite(350,440,200,20)
    op4=createSprite(350,460,200,20)
    op3.visible=false
    op4.visible=false
    if(mousePressedOver(op3)){s9=5}
    if(mousePressedOver(op4)){s9=6}   
    }
    if(s9===5){
   text("Okay then. Anyways, I need to leave now. Goodbye.",150,440)
   var op=createSprite(340,460,60,20)
   op.visible=false
   fill("yellow")
   text("Okay, goodbye.",300,465)
   if(mousePressedOver(op)){s9=0;
                          p1=-1;
                        a1=1;
                        npc7d=1;
                        t17=2;
                    npc7.velocityX=-5;}       
    }
    if(s9===6){
    text("Let me guess, the king sent you because he found out. I should have been more careful.",10,380)
    text("I'm glad you told me. I was going to tell you later, Miss Riddle is also a spy.",10,400)
    text("I will have to run away now, Miss Riddle will tell you the rest.",10,420)
    var op=createSprite(340,440,60,20)
    op.visible=false
    fill("yellow")
    text("Okay, goodbye.",300,445)
    if(mousePressedOver(op)){s9=0;
                            p1=1;
                        a1=1;
                        t17=2;
                        npc7.velocityX=-5;}
    }
}
if(gamestate===10){
    npc16.visible=true
    bg.changeImage("bg9",img9)
    bg.scale=1.15
    bg.x=400 
    if(mc.x>700){mc.x=690}      
    if(mc.x<0){mc.x=650
    gamestate=9}
    if(mousePressedOver(door5)){gamestate=11
    mc.x=650}
    if(mousePressedOver(door6)){gamestate=13
        mc.x=50}
        stroke("black")
        strokeWeight(3) 
        fill("white")
        textSize(16)
            text("(tavern)",300,230) 
            text("(Ms. Riddle's house)",100,230) 
            if(mousePressedOver(door9)){gamestate=14
            mc.x=50}  
    text("(street)",450,220) 
    textSize(18)
    if(mousePressedOver(npc16)){s10=1}  
    if(s10===1){
        op1=createSprite(190,440,200,20)
        op2=createSprite(500,440,200,20) 
        op3=createSprite(500,470,200,20) 
        op3.visible=false
        op1.visible=false
        op2.visible=false
        text("Yes?",320,400)
        fill("yellow")
     //   text("Do you have any work for me?",70,440)
        if(t8===1){text("Did you see any goat around here?",400,440) 
        if(mousePressedOver(op2)){s10=3}      }
        if(t9===1){text("Do you know where I can find potion ingredients?",300,475) 
        if(mousePressedOver(op3)){s10=4}      }
        var op=createSprite(160,470,60,20)
        op.visible=false
        text("Nothing.",140,475)
        if(mousePressedOver(op)){s10=0}  
     //   if(mousePressedOver(op1)){s10=2}
       }
       if(s10===2){
        text("Yes, i need ingredients to make new potions. Get me Fermented Spider Eye,",10,415) 
        text("Glowstone dust, Blaze powder and the most important one... sugar.",10,435)
        fill("yellow")
        t10=1
        var op=createSprite(360,460,60,20)
        op.visible=false
        text("Okay",340,465)
        if(mousePressedOver(op)){s10=0
                              }          
       }
       if(s10===3){
        text("Yes, I think I saw a goat somewhere around here.",10,415) 
        fill("yellow")
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay",340,445)
        if(mousePressedOver(op)){s10=0
                              }          
       }
       if(s10===4){
        text("I don't know. Maybe try asking someone else?",10,415) 
        fill("yellow")
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay",340,445)
        if(mousePressedOver(op)){s10=0
                              }          
       }
}
if(gamestate===11){
   // if(keyDown("q")){t17=2}
    npc8.visible=true
    bg.changeImage("bg11",img11)
    bg.scale=0.5 
    bg.x=400   
    if(mc.x<0){gamestate=12
    mc.x=690}
    if(mc.x>700){gamestate=10
    mc.x=350}
    if(mousePressedOver(npc8)){s11=1}
    if(s11===1){
        op1=createSprite(190,440,200,20)
        op2=createSprite(500,440,200,20) 
        op3=createSprite(500,470,200,20) 
        op4=createSprite(160,470,60,20)
        op4.visible=false
        op3.visible=false
        op1.visible=false
        op2.visible=false
     //   text("Do you have any work for me?",70,440)
        text("Hello.",350,400) 
        fill("yellow")
        if(mousePressedOver(op2)){s11=2}             
        text(".....",140,475)
        if(mousePressedOver(op)){s11=0}  
     //   if(mousePressedOver(op1)){s10=2}  
    if(t17===2){
        text("The potion master is dead..",50,440)
        if(mousePressedOver(op1)){s11=6}
    } 
    }
    if(s11===2){
        text("Oh, you're here so soon? Your room is on your right.",10,420)
        text("You can come to me if you need anything.",10,440)
        var op=createSprite(360,460,60,20)
        op.visible=false
        fill("yellow")
        text("Okay",340,465)
        if(mousePressedOver(op)){s11=0}   
     }
        if(t22===1||t22===5){ 
            fill("white")
            text("(search)",230,250)
            text("(search)",580,290)
            var op2=createSprite(270,260,50,50)
            var op3=createSprite(600,290,50,50)
            op2.visible=false
            op3.visible=false
            if(mousePressedOver(op2)){s11=4}
            if(mousePressedOver(op3)){s11=3}  
            textSize(18) 
            }
            if(s11===4){
            text("(Nothing.)",200,400)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("Okay",340,465)
            if(mousePressedOver(op)){s11=0}  
            } 
            if(s11===3){
                text("(Unopened letters with no adress or stamp.)",100,400)
                var op=createSprite(360,460,60,20)
                op.visible=false
                fill("yellow")
                text("(Burn it)",440,365)
                if(mousePressedOver(op)){s11=0
                t22=t22+6}     
            } 
            if(s11===6){
                fill("white")
                text("Oh I assume she told you about me being a spy then. How many people know about me?",10,420)
                var op=createSprite(360,460,100,20)
                op.visible=false
                fill("yellow")
                text("Just me,  but I can't say for sure.",240,465)
                if(mousePressedOver(op)){s11=5}  
            }
            if(s11===5){
                text("Well... atleast it isn't as abd as I expected. Anyways, unfortunately I cannot be of more help.",10,380)
                text("But while you are at the castle try to sabotage their information. I need to leave for Cordonia",10,400)
                text("So take care, goodbye.",10,420)
                var op=createSprite(360,460,60,20)
                op.visible=false
                fill("yellow")
                text("Okay.",340,465)
                if(mousePressedOver(op)){s11=0
                t17=3} 
            }
}
if(gamestate===12){
   // console.log(i2)
    if(keyDown("q")){t22=1
    npc8.x=-50}
    bg.changeImage("bg10",img10)
    bg.scale=0.4
    bg.x=500
    if(mc.x<0){mc.x=10}
    if(mc.x>700){gamestate=11
    mc.x=10}
    var op9=createSprite(330,460,80,20)
    op9.visible=false
    if(s12==0){if(t9===1){ text("(chest)",310,465)
        if(mousePressedOver(op9)){s12=5}        
    }}
    if(s12===5){
        op1=createSprite(190,400,200,20)
        op2=createSprite(500,400,200,20)
        op1.visible=false
        op2.visible=false
        fill(yellow)
        text("Fermented Spider Eye.",70,400)
        text("Cinamon.",450,400)
        if(mousePressedOver(op1)){i=i+1;i2=i2+1
            s12=6    }
        if(mousePressedOver(op2)){i=i+1
            s12=6    }
    }
    if(s12===6){
        fill(yellow)
        op1=createSprite(190,420,200,20)
        op2=createSprite(500,420,200,20)
        op1.visible=false
        op2.visible=false
        text("Dragon Scales.",80,420)
        text("Sugar.",450,420)
        if(mousePressedOver(op1)){i=i+1
            s12=7    }
        if(mousePressedOver(op2)){i=i+1;i2=i2+1
            s12=7    }
    }
    if(s12===7){
        fill(yellow)
        op1=createSprite(190,400,200,20)
        op2=createSprite(500,400,200,20)  
        op1.visible=false
        op2.visible=false
        text("Bat fur.",450,400)
        text("Blaze Powder",80,400)
        if(mousePressedOver(op1)){i=i+1;i2=i2+1
           t9=2 
            s12=0    }
        if(mousePressedOver(op2)){i=i+1
            t9=2
            s12=0    }
    }    
    if(s12===0){if(t22===1||t22===7){ 
        text("(search)",300,450)
        text("(search)",260,210)
        var op1=createSprite(350,440,50,50)
        var op4=createSprite(290,210,50,50)
        op1.visible=false
        op4.visible=false
        if(mousePressedOver(op1)){s12=3}
        if(mousePressedOver(op4)){s12=4}   
        textSize(18) 
        }}
        if(s12===3){
            text("(Potion materials.)",340,400)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("Okay",340,465)
            if(mousePressedOver(op)){s12=0}     
         } 
         if(s12===4){
            text("Maps with the Four kingdoms' military information.",100,400)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("(Burn it)",340,465)
            if(mousePressedOver(op)){s12=0
            t22=t22+4}     
        }    
}
if(gamestate===13){
    npc5.visible=true 
    bg.changeImage("bg13",img13)
    bg.scale=0.75
    if(mc.x<0){mc.x=10}
    if(mc.x>700){mc.x=690}
    if(mousePressedOver(door7)){gamestate=10
        mc.x=350}
        textSize(16)
    stroke("black")
    strokeWeight(3)
    fill("white")
        text("(exit)",50,330)
    if(mousePressedOver(npc5)){s13=1}
    textSize(18)
    if(s13===1){
        console.log(t13)
        op1=createSprite(190,440,200,20)
        op2=createSprite(500,440,200,20) 
        op3=createSprite(500,470,200,20) 
        op3.visible=false
        op1.visible=false
        op2.visible=false
        text("Hello there, you're not from around here, are you?",120,400)
        fill("yellow")
        if(t13===0){text("Do you have any work for me?",70,440)
        if(mousePressedOver(op1)){s13=2} }
        if(t13===2||t13===3){text("I got the poion you wanted.",70,440)
        if(mousePressedOver(op1)){s13=5} }
        if(t8===1){text("Did you see any goat around here?",400,440) 
        if(mousePressedOver(op2)){s13=3}      }
        if(t9===1){text("Do you know where I can find potion ingredients?",300,475) 
        if(mousePressedOver(op3)){s13=4}      }
        var op=createSprite(160,470,60,20)
        op.visible=false
        text("Nothing.",140,475)
        if(mousePressedOver(op)){s13=0}
    }
    if(s13===2){
        text("Yes, I have been having trouble sleeping lately. I'd be grateful if",10,415) 
        text("you could get me a sleeping potion.",10,435)
        fill("yellow")
        t10=1
        var op=createSprite(360,460,60,20)
        op.visible=false
        text("Okay",340,465)
        if(mousePressedOver(op)){s13=0
                              t13=1}          
       }
    if(s13===5){
     if(t13===2){text("Well, I wanted but the sleeping potion bu I'll just sell this one I guess.",10,415) 
       // text("you could get me a sleeping potion.",10,435)
        fill("yellow")
        t10=1
        var op=createSprite(360,460,60,20)
        op.visible=false
        text("Okay",340,465)
        if(mousePressedOver(op)){s13=0
            coins=coins+40
                              t13=4}    }
    if(t13===3){text("Yes, that is the one I wanted, thankyou.",10,415) 
       //  text("you could get me a sleeping potion.",10,435)
          fill("yellow")
        t10=1
    var op=createSprite(360,460,60,20)
   op.visible=false
      text("Okay",340,465)
       if(mousePressedOver(op)){s13=0
            coins=coins+50
       t13=4}    }      
       }
       if(s13===3){
        text("Yes, I'm glad you came to look for it. I was after planning to cook it.",10,415) 
        fill("yellow")
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay thanks",340,445)
        if(mousePressedOver(op)){s13=0
                                 g=1 }          
       }
       if(s13===4){
        text("I don't know. Maybe try asking someone else?",10,415) 
        fill("yellow")
        var op=createSprite(360,440,60,20)
        op.visible=false
        text("Okay",340,445)
        if(mousePressedOver(op)){s13=0
                              }          
       }
}
if(gamestate===14){
    goat.visible=false
    npc18.visible=true
    bg.changeImage("bg19",img19)
    bg.x=330
    bg.scale=1.43
if(mc.x>700){mc.x=690}
if(mc.x<0){mc.x=10}
if(mousePressedOver(door3)){gamestate=10}
if(mousePressedOver(door10)){gamestate=8}
if(mousePressedOver(door4)){gamestate=15}
textSize(16)
stroke("black")
strokeWeight(3)
fill("white")
text("(port)",100,320)
text("(street)",270,310)
text("(Potionmaker's house)",540,300)
if(mousePressedOver(npc18)){s14=1}  
textSize(18)
if(s14===1){
    op1=createSprite(190,440,200,20)
    op2=createSprite(500,440,200,20) 
    op3=createSprite(500,470,200,20) 
    op3.visible=false
    op1.visible=false
    op2.visible=false
    text("Yes?",320,400)
    fill("yellow")
   // text("Do you have any work for me?",70,440)
    if(t8===1){text("Did you see any goat around here?",400,440) 
    if(mousePressedOver(op2)){s14=3}      }
    if(t9===1){text("Do you know where I can find potion ingredients?",300,475) 
    if(mousePressedOver(op3)){s14=4}      }
    var op=createSprite(160,470,60,20)
    op.visible=false
    text("Nothing.",140,475)
    if(mousePressedOver(op)){s14=0}  
   // if(mousePressedOver(op1)){s14=2}
   }
   if(s14===2){
    text("...",10,415) 
    text("...",10,435)
    fill("yellow")
    t10=1
    var op=createSprite(360,460,60,20)
    op.visible=false
    text("Okay",340,465)
    if(mousePressedOver(op)){s14=0
                             t14=1 }          
   }
   if(s14===3){
    text("No, there was no goat here.",10,415) 
    fill("yellow")
    var op=createSprite(360,440,60,20)
    op.visible=false
    text("Okay",340,445)
    if(mousePressedOver(op)){s14=0
                          }          
   }
   if(s14===4){
    text("I heard Ms. Riddle talking about how she keeps various materials in the",10,415) 
    text("chests in her house.",10,435) 
    fill("yellow")
    var op=createSprite(360,460,60,20)
    op.visible=false
    text("Okay",340,465)
    if(mousePressedOver(op)){s14=0
                          }          
   }
}
if(gamestate===15){
    bg.x=447
   bg.changeImage("bg14",img14)
   bg.scale=0.865
   if(mousePressedOver(door11)){gamestate=14}
   textSize(16)
stroke("black")
strokeWeight(3)
fill("white")
   text("(exit)",620,40)
   if(mc.x>700){mc.x=690}
if(mc.x<0){mc.x=10}
book.visible=true
if(t13==1){
op=createSprite(150,400,200,200)
op.visible=false
text("(take potion.)",100,420)
if(mousePressedOver(op)){s15=1}    
}
if(s15===1){
    op1=createSprite(190,440,200,20)
    op2=createSprite(500,440,200,20) 
    op3=createSprite(190,470,200,20)
    op1.visible=false
    op2.visible=false
    op3.visible=false
    if(mousePressedOver(op1)){s15=0
    t13=2} 
    if(mousePressedOver(op2)){s15=0
    t13=3} 
    if(mousePressedOver(op3)){s15=0
    t13=2}
    fill("yellow") 
    text("Sleeping Potion.",470,445)
    text("Productivity Increasing Potion",70,465)
    text("Hair Growth Potion",70,445)       
}
}
if(gamestate===16){
    goat.visible=false
bg.changeImage("bg15",img15)
bg.scale=0.57
bg.x=200
if(mousePressedOver(door12)){gamestate=17
mc.x=400}
textSize(16)
stroke("black")
strokeWeight(3)
fill("white")
   text("(enter)",520,340)
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
   npc21.visible=true
   npc21.x=240
   npc21.y=360   
   if(mousePressedOver(npc21)){s16=1 }
   if(s16===1){
    strokeWeight(4)
  text("I think you should explore the castle for awhile, Come to me when you're ready to go to",10,420)
  text("the city again.",300,440)   
  fill("yellow")
  strokeWeight(3)
  text("I'll come back later.",180,445)
  text("I'm ready.",370,445)
  op1=createSprite(240,440,90,20)
  op2=createSprite(420,440,90,20)
  op1.visible=false
  op2.visible=false
  if(mousePressedOver(op1)){s16=0}
  if(mousePressedOver(op2)){s16=0}   
   }
}
if(gamestate===17){
    console.log(t18)
  //  if(keyDown("w")){t18=2}
    //if(keyDown("e")){t17=2}
    if(npc7.x>750){
        npc7.depth=bg.depth-1
    npc7.x=100
npc7.velocityx=0}
    npc20.visible=true
    npc22.visible=true
bg.changeImage("bg16",img16)
bg.scale=1
bg.x=350
if(mc.x<0){gamestate=18
mc.x=300}
if(mc.x>700){gamestate=16
mc.x=300}
textSize(18)
if(mousePressedOver(npc22)&&s17===0){  
if(t17===2){s17=4}
if(t17!==2&&t17!==3){s17=1}
if(t18===3){s17=5}
}
if(mousePressedOver(npc20)&&s17===0){s17=6}
if(s17===1){
text("Ah. So you are finally here. I'm glad you decided to come, but you will have to prove ",10,420)
text("your loyalty first.",10,440)
var op=createSprite(360,460,60,20)
op.visible=false
fill("yellow")
text("Okay",340,465)
if(mousePressedOver(op)){
     s17=2
}
}
if(s17===2){
    text("The potion master in Jade Town, she is a spy working for your people, but I suppose",10,400)
    text("you knew that already. Right now, completely trusts you. Give her this potion, it",10,420)    
text("will kill her within an hour. Come back when you are done.",10,440)
var op=createSprite(160,460,60,20)
op.visible=false
fill("yellow")
text("Okay",140,465)
if(mousePressedOver(op)){s17=3
t17=1}
}
if(s17===3){
    text("There is no point in fighting with them anymore, they have already lost everything.",10,400)
    text("Here, I can give you all the luxuries of the world. All they can give you is a ",10,420)    
text("painful death. If you are smart, I hope you will make the right choice.",10,440)
var op=createSprite(360,460,60,20)
op.visible=false
fill("yellow")
text("Okay",340,465)
if(mousePressedOver(op)){s17=0
t17=1}   
}
if(s17===4){
        text("Good, I knew we could trust you. Now, I know there are refugees hiding in the ruins",10,400)
        text("I know you have met them. We are planning an attack on them. Go meet the General ",10,420)
        text("and tell him which of the suspected locations is the base.",10,440)
        var op=createSprite(360,460,60,20)
        op.visible=false
        fill("yellow")
        text("Okay",340,465)
        if(mousePressedOver(op)){s17=0
        t18=1} 
 }
   if(s17===5){
    text("Great! Now I have to leave for important work. So my son, your prince, will  give ",10,400)
    text("you further orders.",10,420)
  //text("and tell him which of the suspected locations is the base.",10,440)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){s17=0
    npc22.velocityX=5   
    t18=3} 
 }
if(s17===6){
    text(".......",340,440)
    var op=createSprite(360,460,60,20)
op.visible=false
fill("yellow")
text("(silence)",340,465)
if(mousePressedOver(op)){
     s17=0
}
}
}
if(gamestate===18){
    bg.changeImage("bg17",img17)
    bg.scale=1  
    if(mc.x<0){gamestate=17
        mc.x=300}
        if(mc.x>700){mc.x=690} 
        if(mousePressedOver(door13)) {gamestate=19
        mc.x=630}
        if(mousePressedOver(door14)) {gamestate=22
        mc.x=100}
        if(mousePressedOver(door15)) {gamestate=21
        mc.x=350}
        textSize(16)
        stroke("black")
        strokeWeight(3)
        fill("white")
        text("(left)",90,200)  
        text("(right)",220,200) 
        text("(forward)",150,120)  
}
if(gamestate===19){
 npc13.visible=true
 bg.changeImage("bg20",img20)
 bg.scale=0.7   
 if(mousePressedOver(door16)){gamestate=20}
 if(mc.x>700){gamestate=18
mc.x=300}
if(mc.x<0){mc.x=10}
textSize(16)
        stroke("black")
        strokeWeight(3)
        fill("white")
text("(bedroom)",550,220)
textSize(18)
if(mousePressedOver(npc13)){s19=1}
if(s19===1){
    if(t18===1){
    text("Oh hello there, do you want to so the map thing now?",10,440)
    fill("yellow")
    strokeWeight(3)
    text("Not now.",250,460)
    text("Sure.",400,460)
    op1=createSprite(290,460,50,20)
    op2=createSprite(420,460,50,20)
    op1.visible=false
    op2.visible=false
    if(mousePressedOver(op1)){s19=0}
    if(mousePressedOver(op2)){s19=2}  } 
}
if(s19===2){
    fill("yellow")
    strokeWeight(3)
    var op=createSprite(360,460,60,20)
    op.visible=false
    text("Okay",340,465)
    if(mousePressedOver(op)){s19=3
                            t18=3}     
}
if(s19===3){
    text("Thankyou for your help.",200,410)
    fill("yellow")
    strokeWeight(3)
    var op=createSprite(360,440,60,20)
    op.visible=false
    text("Okay.",340,445)
    if(mousePressedOver(op)){s19=0
                            t18=3}     
}
}
if(gamestate===20){
   // console.log(t22)
    if(keyDown("q")){t22=2}
    bg.changeImage("bg21",img21)
    bg.scale=0.7   
    if(mc.x<0){mc.x=10}  
    if(mc.x>700){gamestate=19
        mc.x=500}
   if(s20===0) {if(t22>=2&&t22<=3){ 
    text("(search)",130,280)
    text("(search)",380,270)
    text("(search)",260,450)
    text("(search)",560,310)
    var op1=createSprite(290,450,50,50)
    var op2=createSprite(160,260,50,50)
    var op3=createSprite(410,260,50,50)
    var op4=createSprite(590,310,50,50)
    op1.visible=false
    op2.visible=false
    op3.visible=false
    op4.visible=false
    if(mousePressedOver(op1)){s20=1}
    if(mousePressedOver(op2)){s20=2}
    if(mousePressedOver(op3)){s20=3}
    if(mousePressedOver(op4)){s20=4}   
    textSize(18) 
    }}
    if(s20===1){
    text("(Clothes and crumbs of bread.)",100,300)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){s20=0}  
    } 
    if(s20===2){
        text("(Scrolls with information about Cordonia.)",100,300)
        var op=createSprite(360,460,60,20)
        op.visible=false
        fill("yellow")
        text("(Burn it)",340,465)
        if(mousePressedOver(op)){s20=0
        t22=t22+1}     
    } 
    if(s20===3){
        text("(Socks.)",340,300)
        var op=createSprite(360,460,60,20)
        op.visible=false
        fill("yellow")
        text("Okay",340,465)
        if(mousePressedOver(op)){s20=0}     
    } 
    if(s20===4){
        text("Maps with information on Cordonia's refugee base.",100,300)
        var op=createSprite(360,460,60,20)
        op.visible=false
        fill("yellow")
        text("(Burn it)",340,465)
        if(mousePressedOver(op)){s20=0
        t22=t22+1}     
    }    
}
if(gamestate===21){
bg.changeImage("bg22",img22)
bg.scale=1.5
door.visible=true
if(mc.x<0){mc.x=10}
    if(mc.x>700){gamestate=18
        mc.x=100} 
        if(mousePressedOver(door5)){gamestate=25}
}
if(gamestate===22){
   npc17.visible=true
    bg.changeImage("bg23",img23)
    bg.scale=1.5 
    if(mc.x<0){gamestate=18
    mc.x=300}
    if(mc.x>700){mc.x=690} 
        if(mousePressedOver(door17)){gamestate=23
        mc.x=630}
        textSize(16)
        stroke("black")
        strokeWeight(3)
        fill("white")
text("(balcony)",630,270) 
textSize(18)
if(mousePressedOver(npc17)&&s22==0){s22=1}
if(s22===1){
    op1=createSprite(190,440,200,20)
    op2=createSprite(500,440,200,20) 
    op1.visible=false
    op2.visible=false
    op3=createSprite(190,470,200,20)
    op4=createSprite(500,470,200,20) 
    op3.visible=false
    op4.visible=false
    text("Yes?",320,400)
    fill("yellow")
    if(t22===0)
    {text("Do you have any work for me?",70,440)
    if(mousePressedOver(op1)){s22=3}    }
    if(t22===4){
        text("I'm done.",70,440)    
        if(mousePressedOver(op1)){s22=6}    }
    if(t22===11){
        text("I'm done.",70,440)    
        if(mousePressedOver(op1)){s22=7}    }
    //if(t8===1){
        text("Who are you?",400,440) 
    if(mousePressedOver(op2)){s22=2}   
// }
 //   if(t17===1){text("I have a potion for you",350,480)
 //   if(mousePressedOver(op4)){s9=4}}
    text("Nothing.",140,480)
    if(mousePressedOver(op3)){s22=0}     
}
if(s22===2){
    text("Oh me? I'm the Emperor's daughter, Princess Joanna.",50,400   )        
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s22=0}
} 
if(s22===3){
    text("Yes, I wanted to talk to you. Who's side are you really on? And don't worry. I won't snitch.",5,415) 
    fill("yellow")
    strokeWeight(3)
    text("The Four Kingdoms.",240,440)
    text("Cordonia.",400,440)
    op1=createSprite(290,440,50,20)
    op2=createSprite(420,440,50,20)
    op1.visible=false
    op2.visible=false
    if(mousePressedOver(op1)){s22=4}
    if(mousePressedOver(op2)){s22=5}       
}  
if(s22===4){
    text("Oh Okay then, I can help you. I heard rumors that Miss Riddle from Jade Town is the",10,400)
    text("second spy. What I want you to do is go to her house and search it for any letters or ",10,420)
    text(" forms of communication to Cordonia and bring it here.",10,440)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s22=0
    npc8.x=-50
    p=p-1
    t22=1}
}
if(s22===7){
    text("Good you are here faster than expected. Great Job! Go and talk to my brother when you",10,400)
    text("feel you are ready to help him lead the attack against Cordonia. Or if you aren't sure",10,420)
    text("where your loyalties lie, come to me.Tell me before taking any action.",10,440)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s22=0
    t22=12}
} 
if(s22===6){
    text("Good you are here faster than expected. Great Job! The next step is killing my brother",10,400)
    text("before the Emperor comes back. Or if you aren't sure where your loyalties lie, come to",10,420)
    text("me. Tell me before taking any action.",10,440)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s22=0
    t22=5}
} 
if(s22===5){
    text("Okay, the General keeps all information the Four kingdoms have on Cordonia in his bedroom",10,400)
    text("Go to his room, find the papers and then burn it. Come back when you're done.",10,420)
  //  text("inside. Bring it to me. He wont let you do that for obvious reasons so get rid of him first.",10,440)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s22=0
    p=p+1
    npc13.x=-50
    t22=2}
} 
if(s22===6){

}   
if(s22===7){

}         
}
if(gamestate===23){
    //console.log(t25)
    npc11.visible=true
    bg.changeImage("bg24",img24)
    bg.scale=0.8 
    if(mc.x<100){mc.x=110}
    if(mc.x>700){gamestate=22
        mc.x=300}
        if(mousePressedOver(npc11)){s23=1 }  
        if(s23===1){
            fill("white")
            text("(angry glares)",300,420)
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            if(t25===1){
                text("Hello.",340,465)
                if(mousePressedOver(op)){ s23=3 }
            }
            else{
            text("Okay.",340,465)
            if(mousePressedOver(op)){ s23=0 }   }   
        }
        if(s23===2){
            var op=createSprite(360,460,60,20)
            op.visible=false
            fill("yellow")
            text("Hello",340,465)
            if(mousePressedOver(op)){ s23=3 } }
        if(s23===3){
            text("Are you here for the precious stone?",100,440)
            var op1=createSprite(460,460,60,20)
            op1.visible=false
            fill("yellow")
            text("Yes.",440,465)  
            var op2=createSprite(260,460,60,20)
            op2.visible=false
            fill("yellow")
            text("No.",240,465)
            if(mousePressedOver(op1)){ s23=4
            j1=0 } 
            if(mousePressedOver(op2)){ s23=5 
            j1=1} 
        }
        if(s23===4){
            text("Good. You're honest, I like that. Here you can have it",10,420)
            text("Its fake anyway, but don't tell that to anyone.",10,440)
            var op=createSprite(360,460,60,20)
                op.visible=false
                fill("yellow")
                text("Um.. okay.",340,465)
                if(mousePressedOver(op)){ s23=0
                t25=3}    
        } 
        if(s23===5){
            text("You shouldn't have lied to me. I don't like liars. I was going",10,420)
            text("to give it to you but nevermind now.",10,440)
            var op=createSprite(360,460,60,20)
                op.visible=false
                fill("yellow")
                text("Um.. okay.",340,465)
                if(mousePressedOver(op)){ s23=0
                t25=4}    
        }       
                
}
if(gamestate===24){
    bg.changeImage("bg25",img25)
    bg.scale=1.5 
    if(mc.x<0){gamestate=18
    mc.x=300}
    if(mc.x>700){gamestate=25
        mc.x=100}               
}
if(gamestate===25){
  //  if(keyDown("q")){t25=3}
    npc23.visible=true
bg.changeImage("bg25",img25)
bg.scale=0.7 
if(mc.x<100){mc.x=110}  
if(mc.x>700){gamestate=21
mc.x=300}
if(mousePressedOver(npc23)&&s25===0){s25=1}
if(s25===1){
   // box=createSprite(300,300,100,100)
   // if(mousePressedOver(box)){gamestate=26}
    op1=createSprite(190,440,200,20)
    op2=createSprite(500,440,200,20) 
    op1.visible=false
    op2.visible=false
    op3=createSprite(190,470,200,20)
    op4=createSprite(470,470,200,20) 
    op3.visible=false
    op4.visible=false
    text("Yes?",320,400)
    fill("yellow")
    if(t25<3){text("Do you have any work for me?",70,440) 
    if(mousePressedOver(op1)){s25=3}}
    //if(t8===1){
        text("Who are you?",400,440) 
    if(mousePressedOver(op2)){s25=2}     
// }
   if(t25===3||t25===4){text("I'm back",450,480)
    if(mousePressedOver(op4)){s25=5}
    }
    text("Nothing.",140,480)
    if(mousePressedOver(op3)){s25=5} 
}
if(s25===2){
    text("Oh me? I'm the emperor of the Middle East, a part of the four kingdoms.",50,400   )        
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s25=0}
}  
if(s25===3){
    text("Yes, actually. Mind helping me out?",10,415) 
    fill("yellow")
    strokeWeight(3)
    text("Not now.",250,440)
    text("Sure.",400,440)
    op1=createSprite(290,440,50,20)
    op2=createSprite(420,440,50,20)
    op1.visible=false
    op2.visible=false
    if(mousePressedOver(op1)){s25=0}
    if(mousePressedOver(op2)){s25=4}       
}  
if(s25===4){
    text(" There is a Monk that stays in one of right balcony of the castle. I want something he ",5,400)
    text(" has. In that balcony, there is a golden ball with gems all over it, with a precious stone",5,420)
    text("inside. Bring it to me. He wont let you do that for obvious reasons so get rid of him first.",5,440)
    var op=createSprite(360,460,60,20)
    op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ s25=0
    t25=1}
}
 if(s25===5) { 
    var op=createSprite(360,460,60,20)
      if(t25===3){
        fill("white")
    text("Oh thank you. This will make a fine addition to my collection. Here's some coins.",10,415) 
    fill("yellow")
    op.visible=false
   text("Okay",340,465)
    if(mousePressedOver(op)){ s25=0
        gamestate=25
     t25=5
}    
}  
if(t25===4){
    fill("white")
   text("Well, at least you tried I guess. Anyways, goodbye.",10,415)
   op.visible=false
    fill("yellow")
    text("Okay",340,465)
    if(mousePressedOver(op)){ gamestate=25
       s25=0
    t25=5} 
}
}
}

} 
function move(){
    //moving distance + the diatance between mc and goat 
    if(keyDown("left")){
    mc.x=mc.x-25
   if(gm===0){goat.x=mc.x+60}}
    if(keyDown("right")){
    mc.x=mc.x+25
    if(gm===0){goat.x=mc.x+60}}
}