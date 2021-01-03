class Polygons{
    constructor(x, y, r){
        var options = {
            restitution:0.4,
            friction:0.1
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(matterWorld, this.body);
    }
    show(){
        imageMode(CENTER);
        image(polygonImg, this.body.position.x, this.body.position.y, 100, 100);
    }
}