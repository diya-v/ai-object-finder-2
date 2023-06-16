status ="";

function setup(){
    canvas= createCanvas(600,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    input= document.getElementById("input");
}

function modelLoaded(){
    console.log("model loaded");
    status= true;
}

function draw(){
    image(video, 0, 0, 600, 400);
}