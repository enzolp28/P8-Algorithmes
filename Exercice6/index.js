function appendToDisplay(param){
    const display = document.getElementById('display');
    display.value += param;
}

function clearDisplay(){
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult(){
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;
}
