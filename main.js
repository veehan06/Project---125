function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,75);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    background("#6C91C2");
    textSize(difference);
    fill(0, 102, 153);
    text('Veehan Hemant Gurav', 10, 30);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("Left Wrist X is " + leftWristX + "Right Wrist X is " + rightWristX + "Difference is " + difference);
    }
};