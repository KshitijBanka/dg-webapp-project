function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(420, 260);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;

        console.log("Left Wrist X = "+leftWristx+";  Left Wrist Y = "+leftWristy);
        
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;

        console.log("Right Wrist X = "+rightWristx+";  Right Wrist Y = "+rightWristy);
    }
}

leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function draw(){
    image(video, 0, 0, 600, 500);
}

heat_waves_song="";
she_knows_it_song="";


function preload(){
    heat_waves_song = loadSound('Heatwaves.mp3');
    she_knows_it_song = loadSound('drive-forever.mp3');
}

