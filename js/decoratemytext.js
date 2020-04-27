window.onload = function() {
    setupEvents();
};

function setupEvents() {
    document.getElementById("btn-bigger").onclick = autoIncreaseFont;
    document.getElementById("bling").onchange = onBlingChange;
    document.getElementById("igpay").onclick = pigLatinButtonClicked;
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
    
    for (i = 0; i < lines.length; i++) {
        let words = lines[i].split(/\s+/);
        let newWords = [];
        for (j = 0; j < words.length; j++) {
            let newStr = pigLatinConvert(words[j]);
            newWords.push(newStr);
        }
        results.push(newWords.join(" "));
    }
    
    console.log("===> : " + results.length);
    document.getElementById("textInput").value = results.join("\n");
}

const pigLatinConvert = function(str) {
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
  