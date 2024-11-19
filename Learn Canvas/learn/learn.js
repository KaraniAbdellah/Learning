/* Intro And What Is Canvas */
/*
    Canvas is HTML ele allow to draw in browser.
    if container of the drawing
*/


/* Canvas In Deep and Real Life Examples */
/*
    [1]: <canvas width="200" height="200" id="canva"></canvas>
    [2]: can be style with css but just the canvas container
        canvas {
            border: 10px blue solid;
        }
    [3]: Default Demension [300, 150, transparent]
*/




// Context And Filling Style
/*
    By Default Context Color in Black
*/
// select the canvas element
let theCanvas = document.querySelector("#our-canvas");

// select context type
theContext = theCanvas.getContext("2d");

// choose fill style
theContext.fillStyle = "red"; // Color(#F00), Gradiant, Pattern

// Draw Rectangle
theContext.fillRect(0, 0, 100, 100);
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);




// Gradients and Pattern Fill 
/*
    createLinearGradient(x0, y0, x1, y1);
        x0 --> start from left
        y0 --> start from top
        x1 --> end from left
        y1 --> end from top
*/

theCanvas = document.querySelector("#our-canvas"),
theContext = theCanvas.getContext("2d"),

// Select Gradient
theGradiant = theContext.createLinearGradient(0, 1, 0, 100); 
theGradiant.addColorStop(0, "red");
theGradiant.addColorStop(1, "blue");
theGradiant.addColorStop(1, "yellow");
// Select Pattern
let theImage = document.querySelector(".pattern");
thePattern = theContext.createPattern(theImage, "no-repeat"); // repeat, repeat-x, repeat-y

theContext.fillStyle = thePattern;
theContext.fillStyle = theGradiant;
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);


