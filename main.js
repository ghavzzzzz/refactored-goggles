song="";
lX=0;
lY=0;
rX=0;
rY=0;
srw=0;
slw=0;

function setup(){

    canvas=createCanvas(600 , 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}     
function modelLoaded(){
    console.log("PoseNet initialized$");
}
function draw(){

    image(video,0,0,600,500);

    fill('#FF000');
    stroke('#FF000');
    if(srw > 0.2){
    circle(rX,rY,60);

if(rY > 0 && rY <= 100){

    document.getElementById("moo").innerHTML="speed=0.5x";
    song.rate(0.5);
}
else if(rY > 100 && rY <= 200){

    document.getElementById("moo").innerHTML="speed=1x";
    song.rate(1);
}
else if(rY > 200 && rY <= 300){

    document.getElementById("moo").innerHTML="speed=1.5x";
    song.rate(1.5);
}
else if(rY > 300 && rY <= 400){

    document.getElementById("moo").innerHTML="speed=2x";
    song.rate(2);
}
else if(rY > 400 && rY <= 500){

    document.getElementById("moo").innerHTML="speed=2.5x";
    song.rate(2.5);
}
    }

    if(slw > 0.2){

    circle(lX,lY,60);

    INlY=Number(lY);

    r_d=floor(INlY);

    IV=r_d/500;

    document.getElementById("koo").innerHTML="Volume =" + IV;

    song.setVolume(IV);
    }
}
function preload(){

    song=loadSound("gh.mp3");
}
function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        srw=results[0].pose.keypoints[10].score;
        slw=results[0].pose.keypoints[9].score;
        console.log("slw" + slw + "srw=" + srw);
        lX=results[0].pose.leftWrist.x;
        lY=results[0].pose.leftWrist.y;
        console.log("lX=" + lX + "lY=" + lY);

        rX=results[0].pose.rightWrist.x;
        rY=results[0].pose.rightWrist.y;
        console.log("rX=" + rX + "rY=" + rY);
    }

}