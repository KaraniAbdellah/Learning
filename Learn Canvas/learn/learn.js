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




// StrokeRect And Text
/*
    Stroke do just the Border
*/

theCanvas = document.querySelector("#our-canvas");
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




// Charts Taraining
theCanvas = document.querySelector("#our-canvas");
    theContext = theCanvas.getContext("2d");
    let h = theCanvas.height;
    let w = theCanvas.width;
    let start_x = 20;
    let start_y = 40;
    let rect_width = 40;
    let temp = 0;
    let text_pos = 20;
    
    theContext.font = "16px Arial";
    for (let i = 0; i < 6; i++) {
        theContext.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        theContext.fillRect(start_x + temp, start_y, rect_width, h);
        theContext.fillStyle = "black";
        theContext.fillText(`${i + 1}`, start_x + temp + 15, start_y);
        start_x += 20;
        start_y += 40;
        temp += rect_width;
    }



