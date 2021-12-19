lipsX=0;
lipsY=0;

function preload() {
 lipstics = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
  console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
  
   if(results.length > 0) 
   {
       console.log(results);
       lipsX=results[0].pose.nose.x-18;
       lipsY=results[0].pose.nose.y+11;
       console.log("lips x = " + results[0].pose.nose.x);
       console.log("lips y = " + results[0].pose.nose.y);
   }
}

function draw() {
 image(video, 0 , 0 , 300, 300);
 image(lipstics, lipsX, lipsY, 50, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}