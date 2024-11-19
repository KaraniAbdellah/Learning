// Gradients and Pattern Fill 
/*
    createLinearGradient(x0, y0, x1, y1);
        x0 --> start from left
        y0 --> start from top
        x1 --> end from left
        y1 --> end from top
*/

let theCanvas = document.querySelector("#our-canvas"),
theContext = theCanvas.getContext("2d"),
theGradiant = theContext.createLinearGradient(0, 1, 0, 100); 
theGradiant.addColorStop(0, "red");
theGradiant.addColorStop(1, "blue");
theContext.fillStyle = theGradiant;
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);




