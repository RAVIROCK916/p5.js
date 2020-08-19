var drops = [];

function setup() {
    createCanvas(600, 500);
    for(let i=0; i<500; i++)
        drops[i] = new drop();
}

function draw(){
    background(230, 230, 250);
    for(let i=0; i<drops.length; i++){
        drops[i].move();
        drops[i].show();
    }
}
