function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    background("white");
    canvas.mouseReleased(t);
    y=window.speechSynthesis;
}

function preload() {
    x=ml5.imageClassifier('DoodleNet');
}

function t() {
    x.classify(canvas,ans);
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function ans(error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    document.getElementById('l').innerHTML="Label :"+result[0].label;
    document.getElementById('c').innerHTML="Confidence :"+Math.floor(result[0].confidence*100)+"%";
    u=new SpeechSynthesisUtterance(result[0].label);
    y.speak(u);
}

function clear1() {
    background("white");
}