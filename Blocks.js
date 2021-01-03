class Blocks{
    constructor(x, y, w, h){
        
        var options = {
            restitution:0.4,
            friction:0.1,
            isStatic:false
        }
        
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = boxImg;
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(matterWorld, this.body);
    }
    show(){
        var pos = this.body.position;
        if(this.body.speed<3 && this.visibility > 0){
            image(this.image, pos.x, pos.y, this.width, this.height);
        } else
        {   
            World.remove(matterWorld, this.body);
            push();
            
            this.visibility = this.visibility-25;
            tint(255, this.visibility);
            image(this.image, pos.x, pos.y, this.width, this.height);
            
            
            
            pop();
        }
    }
    score(){
        if(this.visibility<0 && this.visibility >-250 ){
            score++;
            console.log(this.visibility);
        }
    }
}