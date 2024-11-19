// Context And Filling Style
// select the canvas element
let theCanvas = document.querySelector("#our-canvas");

// select context type
theContext = theCanvas.getContext("2d");

// choose fill style
theContext.fillStyle = "#F00"; // Coloe, Gradiant, Pattern

// Draw Rectangle
theContext.fillRect(0, 0, 100, 100);
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);



