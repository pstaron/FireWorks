let fireworks = []
let clicked = false
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    rectMode(CENTER);
}

function getCountdownTime() {
    const date = new Date()
    let days = 147 - date.getDay()
    let hours = 24 - date.getHours()
    let minutes = 60 - date.getMinutes()
    let seconds = 60 - date.getSeconds()
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`
    return `${days}:${hours}:${minutes}:${seconds}`
}

function draw() {
    background(0,0,0,25)
    if (!clicked) {
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text("Click", window.innerWidth / 2, window.innerHeight / 2);
    }else {
        textSize(140);
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text(getCountdownTime(), window.innerWidth / 2, window.innerHeight / 2);
        textSize(10);
        noStroke()
        
        for (let f of fireworks) f.step()
    }
}

function mouseReleased() {
    clicked = true
    let target = {
        x: mouseX,
        y: mouseY
    }
    fireworks.push(new Firework(target))
}
