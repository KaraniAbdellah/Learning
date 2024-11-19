// StrokeRect And Text


let theCanvas = document.querySelector("#our-canvas");
    theContext = theCanvas.getContext("2d");
    let h = theCanvas.height;
    let w = theCanvas.width;
    let start_x = 20;
    let start_y = 40;
    let rect_width = 40;
    let temp = 0;


    for (let i = 0; i < 6; i++) {
        theContext.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        theContext.fillRect(start_x + temp, start_y, rect_width, h);
        start_x += 20;
        start_y += 40;
        temp += rect_width;
    }


    
 