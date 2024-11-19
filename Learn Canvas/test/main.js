// Gradients and Pattern Fill 


let theCanvas = document.querySelector("#our-canvas"),
theContext = theCanvas.getContext("2d");

// Select Pattern
let theImage = document.querySelector(".pattern");

// Create Pattern
thePattern = theContext.createPattern(theImage, "no-repeat"); // repeat, repeat-x, repeat-y

theContext.fillStyle = thePattern;
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);

