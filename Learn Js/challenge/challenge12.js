// Global Roles
var myContentPage = create("div");
myContentPage.className = "page-content";
document.querySelectorAll('*').forEach(element => {
    element.style.boxSizing = 'border-box';
});
document.body.style.cssText = "margin: 0; font-family: Tahoma, Arial;";

// Start A Function For Create An Element
function create(ele) {
    return document.createElement(ele);
}

// Start A Function For Append
function Append(ele, parent) {
    return parent.appendChild(ele);
}

// Start A Function That Add Classes
function AddClass(ele, value) {
    return ele.className = value;
}

// Start Header
var header = create("header");
header.style.cssText = "height: 60px; display: flex; justify-content: space-between;\
align-items: center; padding: 10px;";
var pHeader = create("p");
pHeader.textContent = "Abdellah";
AddClass(pHeader, "logo");
pHeader.style.cssText = "font-size: 22px; color: #23a96e; font-weight: 600;";
var ulHeader = create("ul");
AddClass(ulHeader, "links");
ulHeader.style.cssText = "list-style: none; display: flex;";
var liContent = ["Home", "About", "Service", "Content"];
for (var i = 0; i < 4; i++) {
    var liHeader = create("li");
    liHeader.textContent = liContent[i];
    liHeader.style.cssText = "font-size: 18px; color: grey; margin-left: 10px;"
    ulHeader.appendChild(liHeader);
}
Append(pHeader, header);
Append(ulHeader, header);


// Start Content
var div = create("div");
div.className = "content";
div.style.cssText = "background-color: #eee; height: calc(100vh - 80px - 60px);\
display: flex; gap: 20px; flex-direction: column; flex-wrap: wrap; padding: 20px;";
// Start Boxes
for (var i = 0; i < 15; i++) {
    var box = create("div");
    box.style.cssText = "padding: 10px; background-color: white; text-align: center;";
    AddClass(box, "box");

    var h3Box = create("h3");
    h3Box.textContent = `${i + 1}`;
    h3Box.style.cssText = "font-size: 25px; font-weigh: normal; font-weight: 400;";

    var pBox = create("p");
    pBox.textContent = "Product";
    pBox.style.cssText = "color: #bcbcbc; font-size: 18px;";

    Append(h3Box, box);
    Append(pBox, box);
    Append(box, div);
}



// Start Footer
var footer = create("footer");
footer.style.cssText = "background-color: #23a96e; height: 60px;\
display: flex; justify-content: center; align-item: center;";
var pFooter = document.createElement("p");
pFooter.textContent = "CopyRight 2024";
pFooter.style.cssText = "color: white; font-size: 18px;";
Append(pFooter, footer);


// Add Elements
Append(myContentPage, document.body);
Append(header, myContentPage);
Append(div, myContentPage);
Append(footer, myContentPage);

