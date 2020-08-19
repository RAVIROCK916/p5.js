function drop(){

    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20)
    this.speed = map(this.z, 0, 20, 4, 7);
    this.len = map(this.z, 0, 20, 10, 20);

    this.move = function(){
        this.y = this.y + this.speed;
        this.speed = this.speed + map(this.z, 0, 20, 0, 0.05);

        if(this.y > height){
            this.y = random(-500, -50);
            this.speed = random(4, 10);
        }
    }

    this.show = function(){
        strokeWeight(map(this.z, 0, 20, 1, 2));
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, (this.y+this.len));
    }
}
