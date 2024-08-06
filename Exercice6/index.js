function appendToDisplay(param) {
    const display = document.getElementById('display');
    display.value += param;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // Vérifier la division par zéro
        if (expression.includes('/0')) {
            throw new Error('Division by zero is not allowed');
        }
        display.value = eval(expression);
    } catch (error) {
        display.value = error.message;
    }
}
