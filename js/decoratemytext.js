window.onload = function() {
    "use strict";
    setupEvents();
};

function setupEvents() {
    document.getElementById("btn-bigger").onclick = autoIncreaseFont;
    document.getElementById("bling").onchange = onBlingChange;
    document.getElementById("igpay").onclick = pigLatinButtonClicked;
    document.getElementById("malkovitch").onclick = malkovitchButtonClicked
}

const helloAlert = function() {
    alert("Hello, world!");
}

const setLargeFont = function() {
    //document.getElementById("textInput").className = "largeFont";
    document.getElementById("textInput").style.fontSize = "4em";
}

const rightTextAlign = function() {
    document.getElementById("textInput").style.textAlign = "right"
}

const onBlingChange = function() {
    let textInput = document.getElementById("textInput");
    let checked = document.getElementById("bling").checked;
    textInput.style.fontWeight = checked ? "bold" : "normal";
    textInput.style.color = checked ? "green" : "black";
    textInput.style.textDecoration = checked ? "underline" : "none";
    document.body.style.backgroundImage = checked ? "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)" : "none";
}

const autoIncreaseFont = function() {
    setInterval(() => {
        let fontSize = parseInt(document.getElementById("textInput").style.fontSize);
        if (isNaN(fontSize)) fontSize = 12;
        document.getElementById("textInput").style.fontSize = (fontSize + 2) + "pt";
    }, 500);
}

const pigLatinButtonClicked = function() {
    let textInput = document.getElementById("textInput").value;
    let lines = textInput.split("\n");

    let results = [];
    
    for (let line of lines) {
        console.log("line: " + line);
        let words = line.split(/\s+/);
        console.log("words: " + words);
        let newWords = words.map(w => pigLatinConvert(w));
        results.push(newWords.join(" "));
    }
    
    document.getElementById("textInput").value = results.join("\n");
}

const pigLatinConvert = function(str) {
    console.log("===: "+ str);
    if (str.length == 0) return "";
    let firstChar = str.charAt(0);
    let isUpperCase = false;
    if (firstChar === firstChar.toUpperCase()) {
        isUpperCase = true;
    }
    firstChar = firstChar.toLowerCase();
    let vowel = "aeiou";
    let result = "";
    if (vowel.includes(firstChar) || str.length == 1) {
        result = str + "ay";
    } else {
        str = str.substr(1);
        result = str + firstChar + "ay";
    }
    if (isUpperCase) return capitalizeFirstLetter(result);
    return result;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function malkovitchButtonClicked() {
    let textInput = document.getElementById("textInput").value;
    let lines = textInput.split("\n");
    let results = [];
    
    for (let line of lines) {
        let words = line.split(/\s+/);
        let newWords = words.map(w => {
            if (w.length < 5) return w;
            return "Malkovitch";
        })
        results.push(newWords.join(" "));
    }

    document.getElementById("textInput").value = results.join("\n");
}
  