nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
diffrence=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw()
{
    background('blue')
    fill("purple")
    stroke("green")
    square(nosex,nosey,diffrence);
}

function modelLoaded()
{
    console.log('poseNet is initialized')
}

function gotposes(results)
{
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+nosex+"nosey="+nosey);

    leftwristx=results[0].pose.leftWrist.x
    rightwristx=results[0].pose.rightWrist.x
    difference=floor(leftwristx-rightwristx);

    console.log("leftwristx="+leftwristx+"rightwristx="+rightwristx+"diffrence="+diffrence)
}

}