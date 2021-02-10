let kortImg;
let kantine;
let lend = 1136;

function setup(){
createCanvas(lend, lend*0.51408450704);
print('width: ' + kortImg.width);
print('height: ' + kortImg.height); // tænker at det gerne må være billedets orginale højde for at få et bedst mulig billede


}


function draw(){
    background(kortImg);
    kantine = rect(0.721*width, 0.196*width, 0.064*width, 0.113*width);
    kantine.noFill();
    kantine.stroke(0, 255, 0);  
    // tænker egentlig det er nemmere at lave en seperat object, som hedder bygninger og havde alle vores bygninger i den ydre figur derinde
    // Hvorpå vi kan lave en til object senere hen til plantegningerne
}


function mouseClicked(){
    console.log('Mouse x: ' + mouseX + ' , mouse y: ' + mouseY);
    console.log('Mouse x og y i forhold til width: \nx: ' + mouseX/width + ' * width' + '\ny: ' + mouseY/width + ' * width');
    // vi kan hurtigt finde kordinaterne sådan at vi kan lave firkanter, trekanter,
    // eller mere komplexe figurere, som er over en af bygningerne
}

function preload(){
    kortImg = loadImage('img/sukkertoppen.png');
}