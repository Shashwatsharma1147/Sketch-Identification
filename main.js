R = "" ;
G = "";
B = "";

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
    document.getElementById("label").innerHTML = "label: "+result[0].label;
    document.getElementById("confidence").innerHTML = "cofidence: "+Math.round(result[0].confidence*100)+"%";
    utterThis = new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);
}

function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}

//function mouseClicked(){
    //R = Math.random()*255;
    //G = Math.random()*255;
    //B = Math.random()*255;
    //draw();

//}

function draw(){
    //background(R, G, B);
    strokeWeight(11);
    stroke("black");

    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clearCanvas(){
    background("white");
}



