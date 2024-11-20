// Paths And Lines

let theCanvas = document.querySelector("#our-canvas");
theContext = theCanvas.getContext("2d");

// Begin Path
theContext.beginPath();

// Select The Start Position
theContext.moveTo(10, 10);

// Select The Path Point
theContext.lineTo(100, 10);

// Adjust Style and Line Width
theContext.lineWidth = 10;
theContext.strokeStyle = "grey";

// Draw The Path
theContext.stroke();




