function preload(){
    
   }

function setup(){

}

function draw(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function snapshot(){
    save('picture.png');
    }