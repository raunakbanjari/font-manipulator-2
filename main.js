function setup(){
    video = createCapture(VIDEO);
    video.size(500,480);

    canvas = createCanvas(550,400);
    canvas.position(600,110);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('gray');
}

function modelLoaded(){
    console.log("POSENET IS INITIALIZED");
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}