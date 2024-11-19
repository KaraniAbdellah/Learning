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
// select the canvas element
let theCanvas = document.querySelector("#our-canvas");

// select context type
theContext = theCanvas.getContext("2d");

// choose fill style
theContext.fillStyle = "#F00"; // Coloe, Gradiant, Pattern

// Draw Rectangle
theContext.fillRect(0, 0, 100, 100);
theContext.fillRect(0, 0, theCanvas.width, theCanvas.height);


