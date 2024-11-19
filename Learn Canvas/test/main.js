// StrokeRect And Text
/*
    Stroke do just the Border
*/

let theCanvas = document.querySelector("#our-canvas");
    theContext = theCanvas.getContext("2d");
    theGradient = theContext.createLinearGradient(0, 0, 200, 0);
    theGradient.addColorStop(0, "red");
    theGradient.addColorStop(1, "yellow");

theContext.lineWidth = 2; // border = 10px
theContext.strokeStyle = theGradient;
theContext.strokeRect(10, 10, 100, 100);

// Set font & Create filled text
theContext.font = "20px Arial";
// theContext.fillStyle = theGradient;
// theContext.fillText("Hello", 40, 60);
theContext.strokeStyle = theGradient;
theContext.strokeText("Hello", 40, 60);





