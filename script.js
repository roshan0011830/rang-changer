// 🎨 Welcome to Color Changer Project
console.log("welcome to color changer ---->");


// 🔘 Selecting all important DOM elements
let randomColorBtn = document.querySelector("#randomColorBtn");   // 🎲 Random color generator button
console.log(randomColorBtn);

let applyColorBtn = document.querySelector("#applyColorBtn");     // 🎯 Apply color button
console.log(applyColorBtn);

let body = document.querySelector("body");                        // 🌈 Body element (for applying background color)
let currentColor = document.querySelector("#display");            // 🖥️ Display area (to show current color name)
let inputColor = document.querySelector("input");                 // ✏️ Input box (for user color name or hex code)
console.log(inputColor);



// 🌀 Random Color Button Functionality
function generateRandomColor() {

    // 🎨 List of 100 colors
    const colors = [
      "red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white",
      "gray", "cyan", "magenta", "lime", "maroon", "navy", "teal", "olive", "silver", "gold",
      "indigo", "violet", "coral", "turquoise", "aqua", "beige", "chocolate", "crimson", "khaki", "plum",
      "salmon", "tan", "tomato", "wheat", "azure", "bisque", "blanchedalmond", "blueviolet", "burlywood", "cadetblue",
      "chartreuse", "cornflowerblue", "cornsilk", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta",
      "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
      "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
      "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "ivory", "lavender", "lavenderblush", "lawngreen", "lemonchiffon",
      "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue",
      "lightsteelblue", "lightyellow", "limegreen", "linen", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue"
    ];

    // 🎲 Generate random index between 0-99
    let index = (Math.random() * 100).toFixed();
    console.log(index);

    // 🧩 Select random color name
    colorName = colors[index];
    console.log(colorName);

    // 🖼️ Display and apply the selected color
    displayCurrentColor(colorName);
    applyColor(colorName);

    return colorName;
}

// 🖱️ Event listener for random color button
randomColorBtn.addEventListener("click", generateRandomColor);



// ⌨️ Handling input when user presses Enter key
inputColor.addEventListener("keydown", handleEnter);

function handleEnter(e) {
    console.log(e.key);
    if (e.key === "Enter") {
        colorName = e.target.value;
        console.log(colorName);

        inputColor.value = ""; // Clear input field after entry
        applyColor(colorName); // Apply entered color
        return colorName;
    }
}



// 👁️ Handling input blur event (when user moves out of input box)
inputColor.addEventListener("blur", workInput);

// ⚙️ WorkInput function - triggered when user leaves input field
function workInput(e) {
    console.log("apply theme daba ab");
    console.log(e.target.value);
    colorName = e.target.value;

    inputColor.value = ""; // Clear input after use
    return colorName;
}



// 🎯 Apply Color Button Functionality
applyColorBtn.addEventListener("click", () => applyColor(colorName));


// 🌈 Function to apply selected color to body
function applyColor(colorName) {
    console.log(colorName);
    body.style.backgroundColor = `${colorName}`; // Change background color
    displayCurrentColor(colorName);              // Update current color text
}



// 🖥️ Function to display the current color name in display section
function displayCurrentColor(colorName) {
    currentColor.innerText = `Current color : ${colorName}`;
}
