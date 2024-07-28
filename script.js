let display = document.getElementById('display');
let currentInput = '';

function inputValue(value) {
    if (currentInput.length >= 12) return; // Limit input length
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

