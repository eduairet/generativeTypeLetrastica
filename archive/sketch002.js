'use strict';

const [w, h] = [window.innerWidth, window.innerHeight],
    placeholder = 'ENTER';
let myFont;

function preload() {
    myFont = loadFont('./RobotoMono-VariableFont_wght.ttf');
}

function setup() {
    createCanvas(w, h);
    textFont(myFont);
}

function draw() {
    background('#0FF1');
    // Text
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(255);
    text(placeholder, mouseX, mouseY);
    fill(0);
    text(placeholder, mouseX, mouseY * 0.5);
}
