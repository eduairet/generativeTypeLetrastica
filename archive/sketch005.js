'use strict';

const offset = -15;
let mywords, myFont, dashOffset, advance, bgColor, placeholder;

// Util
const myText = y => {
    push();
    translate(width / 2, height / 2);
    rotate(map(mouseX, 0, width, 0, 2 * PI));
    translate(0, -height / 2);
    // Bottom text
    push();
    fill(0, 0, 255, 20);
    text(placeholder, offset, y + offset);
    pop();
    // Top text
    fill(255);
    stroke(0);
    strokeWeight(10);
    drawingContext.setLineDash([200, 100, 50]);
    drawingContext.lineDashOffset = dashOffset + y * 2;
    text(placeholder, random(-5, 5), y);
    pop();
};

const ranColor = () => [0, 0, random(0, 1) * 255, 255 / 2];
const ranWord = arr => random(arr);

// Drawbot
function preload() {
    myFont = loadFont('./RobotoMono-VariableFont_wght.ttf');
    mywords = loadStrings('poetry.txt');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(300);
    textAlign(CENTER, CENTER);
    textFont(myFont); // Sets the whole sketch font
    frameRate(10);
    bgColor = ranColor();
    dashOffset = 0;
    advance = 0;
    placeholder = ranWord(mywords).toUpperCase();
}

function draw() {
    background(bgColor);
    // Text
    for (let rep = 0; rep + mouseY < height * 0.75; rep += 10) myText(80 + rep);
    // Offset increase
    dashOffset += 20;
}

function mouseClicked() {
    bgColor = ranColor();
    placeholder = ranWord(mywords).toUpperCase();
}
