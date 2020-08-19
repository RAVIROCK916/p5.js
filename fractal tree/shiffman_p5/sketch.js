function setup() {
    createCanvas(800, 700);
    slider = createSlider(0, PI, PI/8, 0.001);
    slider.position(10, 10);
    slider.style('width', '80px');
}

len = 200;
angle = 45;
function tree(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    len = 2*len/3;
    if(len>4){
        push();
        rotate(angle);
        tree(len);
        pop();
        push();
        rotate(-angle);
        tree(len);
        pop();
    }
}

function draw(){
    background(0);
    angle = slider.value();
    stroke(255);
    translate(width/2, height);
    tree(len);
}
