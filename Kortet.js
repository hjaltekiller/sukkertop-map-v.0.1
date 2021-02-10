let kortImg;
let kantine;
let lend = 1042;

function setup(){
createCanvas(lend, lend*0.53454894433);
//print(kortImg.width);
//print(kortImg.height); // tænker at det gerne må være billedets orginale højde for at få et bedst mulig billede


}


function draw(){
    background(kortImg);
    kantine = rect(width*0.78023032629, width*0.17850287907, width*0.07773512476, width*0.12859884836);
    kantine.noFill();
    kantine.stroke(0, 255, 0);  
    // tænker egentlig det er nemmere at lave en seperat object, som hedder bygninger og havde alle vores bygninger i den ydre figur derinde
    // Hvorpå vi kan lave en til object senere hen til plantegningerne
}


function mouseClicked(){
    console.log('Mouse x: ' + mouseX + ' , mouse y: ' + mouseY); // vi kan hurtigt finde kordinaterne sådan at vi kan lave firkanter, trekanter,
    // eller mere komplexe figurere, som er over en af bygningerne
}

function preload(){
    kortImg = loadImage('other/sukkertoppen.png');
}