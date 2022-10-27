'use strict';

const [w, h] = [window.innerWidth, window.innerHeight],
    placeholder = 'ENTER',
    offset = 15;
let myFont, dashOffset, advance;

// Util
const myText = y => {
    push();
    // Bottom text
    push();
    fill(0, 0, 255, 20);
    text(placeholder, offset, y + offset);
    pop();
    // Top text
    fill(255);
    stroke(0);
    strokeWeight(10);
    drawingContext.setLineDash([100, 60, 20, 50]);
    drawingContext.lineDashOffset = dashOffset;
    text(placeholder, 0, y);
    pop();
};

// Drawbot
function preload() {
    myFont = loadFont('./RobotoMono-VariableFont_wght.ttf');
}

function setup() {
    createCanvas(w, h);
    textSize(300);
    textAlign(CENTER, CENTER);
    textFont(myFont); // Sets the whole sketch font
    dashOffset = 0;
    advance = 0;
}

function draw() {
    background('#0FF1');
    // Text
    translate(width / 2, 0);
    for (let rep = 0; rep + mouseY < height * 0.75; rep += 30) myText(80 + rep);
    // Offset increase
    dashOffset += 2;
}
