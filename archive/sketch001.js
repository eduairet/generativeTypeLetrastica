'use strict';

// Place to put global variables
const [w, h] = [window.innerWidth, window.innerHeight];
// Place to put mutable variables
let radius = 10;

function setup() {
    createCanvas(w, h);
    //background(0); // Background here doesn't clean the screen
}

function draw() {
    background('#00000011');
    strokeWeight(3);
    stroke(255);
    line(0, 0, width, height);
    // First circle
    fill('magenta');
    circle(200, 200, 100);
    // Second circle
    stroke(0, 255, 255);
    fill('#FF00EE');
    // Integrated events
    circle(mouseX, mouseY, radius);
    radius = radius + 0.1;
}
