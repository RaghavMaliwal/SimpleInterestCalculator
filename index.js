// Get input elements for principal amount, rate, and time period
let PAInput = document.querySelector("input[type=number][class=principalAmount]");
let RInput = document.querySelector("input[type=number][class=rate]");
let TInput = document.querySelector("input[type=number][class=timePeriod]");

// Create a new paragraph element to display the result
let createPara = document.createElement("p");


// Function to calculate simple interest
function simpleInterest() {

    //Generating alert if any of the input is empty
    if(PAInput.value == "" || RInput.value == "" || TInput.value == "" ){
        callAlertFunction();
        return;
    }

    // Get elements for content and result
    let contentBox = document.querySelector("#con");
    let showResult = document.querySelector("#cone");
    let para = document.querySelector("#RESULT");


    // Show result and hide content box
    showResult.style.visibility = "visible";
    showResult.style.height = "22em";
    showResult.style.width = "50em";
    showResult.style.display = "flex";
    contentBox.style.visibility = "hidden";
    contentBox.style.height = "0px";
    contentBox.style.width = "0px";

    
    // Get values from input fields
    let p = parseInt(PAInput.value);
    let r = parseInt(RInput.value);
    let t = parseInt(TInput.value);

    

    // Calculate simple interest
    let si = (p * r * t) / 100;

    // Style the result paragraph
    createPara.style.textAlign = "center";
    createPara.style.textDecoration = "none";
    createPara.style.fontSize = "100px";

    // Format and display the result
    let sis = si.toString(10);
    createPara.textContent = "Rs " + sis;
    para.append(createPara);
}

// Toggle between dark and light mode
let isDarkMode = false;

function changeMode() {
    // Get elements to be styled
    let body = document.body;
    let outer = document.querySelector(".outer--left");
    let inner = document.querySelector(".inner--left");
    let container = document.querySelector("#con");
    let heading = document.querySelector("h1");
    let input = document.querySelector("input");
    let resCon = document.querySelector("#cone");
    let reset = document.querySelector("#reset");
    let calculate = document.querySelector("#calc");

    // Check if in dark mode and apply corresponding styles
    if (isDarkMode) {
        // Reset to default settings
        resetToDefaultStyles(body, outer, inner, container, heading, input, resCon, reset, calculate);

    } else {
        // Apply dark mode settings
        applyDarkModeStyles(body, outer, inner, container, heading, input, resCon, reset, calculate);
    }

    // Toggle the mode
    isDarkMode = !isDarkMode;
}

// Reset function to reset the form
function reset() {
    // Get elements for content and result
    let contentBox = document.querySelector("#con");
    let showResult = document.querySelector("#cone");
    let para = document.querySelector("#RESULT");

    // Show content and hide result
    contentBox.style.visibility = "visible";
    contentBox.style.height = "22em";
    contentBox.style.width = "50em";

    showResult.style.visibility = "hidden";
    showResult.style.height = "0px";
    showResult.style.width = "0px";
    showResult.style.display = "none";

    // Reset input values
    PAInput.value = "default";
    RInput.value = "default";
    TInput.value = "default";
}

// Function to reset styles to default settings
function resetToDefaultStyles(body, outer, inner, container, heading, input, resCon, reset, calculate) {
    // Reset to default settings
    body.style.backgroundColor = "";
    outer.style.backgroundColor = "";
    outer.style.justifyContent = "";
    outer.style.border = "";
    inner.style.backgroundColor = "";
    container.style.backgroundColor = "";
    container.style.color = "";
    calculate.style.color = "";
    calculate.style.backgroundColor = "";
    heading.style.color = "";
    heading.style.textDecorationColor = "";
    input.style.color = "";
    input.style.backgroundColor = "";
    resCon.style.backgroundColor = "";
    resCon.style.color = "";
    reset.style.backgroundColor = "";
    reset.style.color = "";
}

// Function to apply dark mode styles
function applyDarkModeStyles(body, outer, inner, container, heading, input, resCon, reset, calculate) {
    // Apply dark mode settings
    // body.style.backgroundColor = "#7D0A0A";
    outer.style.backgroundColor = "#F3EDC8";
    outer.style.justifyContent = "right";
    outer.style.border = "2px solid black";
    inner.style.backgroundColor = "#7D0A0A";
    container.style.backgroundColor = "#7D0A0A";
    container.style.color = "#F3EDC8";
    calculate.style.color = "#7D0A0A";
    calculate.style.backgroundColor = "#F3EDC8";
    heading.style.color = "#F3EDC8";
    heading.style.textDecorationColor = "#F3EDC8";
    input.style.color = "#7D0A0A";  
    resCon.style.backgroundColor = "#7D0A0A";
    resCon.style.color = "#F3EDC8";
    reset.style.backgroundColor = "#F3EDC8";
    reset.style.color = "#7D0A0A";
}

//function to generate alert function if any of the input is empty
function callAlertFunction(){

    alert("Please Enter all the values...!!");

}


