'use strict';

let roboMono;

// Util
let letteroff;
const abc = 'abcdefghijklmnopqrstuvwxyz',
    myChar = (x, y, deg, cletter, str) => {
        push();
        textSize(25);
        translate(x, y);
        rotate(deg + frameCount);
        shearX(Math.sin(frameCount));
        fill(255);
        text(str[cletter], 0, 0);
        pop();
    };

// Drawbot
function preload() {
    roboMono = loadFont('./RobotoMono-VariableFont_wght.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(roboMono);
    angleMode(DEGREES);
    frameRate(36);
    textAlign(CENTER);
    letteroff = 0;
}

function windowResized() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#0002');
    // Text
    if (frameCount % 16 == 0) {
        letteroff++;
    }
    let lncounter = 0;
    for (let y = height * 0.1; y < height * 0.9; y += height * 0.05) {
        for (let i = 0; i < abc.length; i++) {
            myChar(
                map(i, 0, abc.length, width * 0.1, width * 0.9),
                y +
                    Math.sin((frameCount / 2 + i) / 4) * 10 +
                    Math.cos((y + i) / 4) * 10,
                map(i * lncounter, 0, abc.length * 16, 0, 360),
                lncounter % 2 === 0
                    ? (i + letteroff) % abc.length
                    : (letteroff % abc.length) - i,
                abc
            );
        }
        lncounter++;
    }
}
