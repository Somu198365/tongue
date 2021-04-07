noseX=0;
noseY=0;
function preload(){
    tounge=loadImage('https://i.postimg.cc/pX02dS4X/tongue-PNG30.png');
}
function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Pose Net');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-20;
        noseY=results[0].pose.nose.y+25;

        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}
function draw(){
    image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(tounge,noseX,noseY,40,40);
}

function take_snap()
{
    save('Tounge_haha')
}