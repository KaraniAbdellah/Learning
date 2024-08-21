/*
    To Understand Ajax, Fetch, Promises

    Pyramid Of Doom || Callback Hell

    - What Is Callback
    - Callback Hell Example

    What Is Callback
    - A Function That Is Passed Into Another One As An Argument To Be Executed Later
    - Function To Handle Photos
    --- [1] Download Photo From URL
    --- [2] Resize Photo
    --- [3] Add Logo To The Photo
    --- [4] Show The Photo In Website
*/
// For Understand Call Back Hell --> See The Image

function makeItRead(e) {
    e.target.style.color = "green";
}
let p = document.querySelector(".callBack");
p.addEventListener("click", makeItRead);
function CallBack() {
    console.log("I Am Call Back Function");
}
setTimeout(CallBack, 1000);

// Example Of CallBack Hell
setTimeout(() => {
    console.log("Download Photo From URL");
    setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
            console.log("Add Logo To The Photo");
            setTimeout(() => {
                console.log("Show The Photo In Website");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);





