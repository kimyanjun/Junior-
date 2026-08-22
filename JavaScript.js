// Example 1: Change text
function changeText() {
    document.getElementById("message").textContent =
        "Great! JavaScript changed the text.";
}


// Example 2: Add two numbers
function addNumbers() {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let answer = number1 + number2;

    document.getElementById("result").textContent =
        "The answer is: " + answer;
}
