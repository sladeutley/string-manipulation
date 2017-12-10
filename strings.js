//CAN'T GET IT TO ONLY ALLOW LETTERS!!!!!

let userText = document.getElementById("userInput");
let toTheDom = document.getElementById("output");
let clickingTheButton = document.getElementById("btn1");

function printToDom (value) {
    toTheDom.innerHTML = value;
}

clickingTheButton.addEventListener("click", reversal);
// clickingTheButton.addEventListener("click", alphabits);

function reversal(userInput) {
    let captureText = userText.value;
    let outputValue = "";
    let stringToArray = captureText.split(" ");
    let reverse = stringToArray.reverse().join(" ");
    outputValue += `reverse it: "${reverse}".` + "<br>";
    printToDom(outputValue);
    }
    
function alphabits(userInput) {
    let captureText = userText.value;
    let outputValue = "";
    let stringToArray = captureText.split(" ");
    let alphabetical = stringToArray.sort().join(" ");
    outputValue += `alphabetize it: "${alphabetical}".` + "<br>";
    printToDom(outputValue);
    }
    
function palindrome(userInput) {
    let captureText = userText.value;
    let outputValue = "";
    let stringToArray = captureText.split(" ");
    let reverse = stringToArray.reverse().join(" ");
    if (reverse === captureText)
    outputValue += `reverse it: "${reverse}".`;
    printToDom(outputValue);
    }

// clickingTheButton.addEventListener("click",function() {
//     let captureText = userText.value;
//     let outputValue = "";
//     reversal(captureText);
//     alphabits(captureText);
//     palindrome(captureText);
//     printToDom(outputValue);
// });
    
    // var testString = "";
    // reversal(testString);
    // alphabits(testString);
    // palindrome(testString);