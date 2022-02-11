img="";
status="";
objects=[];

function setup(){
    canvas=createCanvas(400,400);
    //canvas.center();
    document.getElementById("status").innerHTML="Defining Images";
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
}

function preload(){
    img=loadImage("desk.jpeg");

}

function draw(){
    image(img,0,0,400,400);
    if(status !=""){
    for(i=0; i< objects.length; i++){
    document.getElementById("status").innerHTML="Status: Objects Detected";
    fill("#8c035a");
    percent=ceil(objects[i].confidence*100);
    text(objects[i].label+""+percent+"%",objects[i].x+40,objects[i].y+40);
    noFill();
    stroke("#8c035a");
    rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
    }
}}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
objects=results;
    }
}


