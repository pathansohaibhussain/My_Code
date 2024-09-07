let display = '';

function appendToDisplay(value) {
    display += value;
    document.querySelector('input').value = display;
}

function clearDisplay() {
    display = '';
    document.querySelector('input').value = display;
}

function calculateResult() {
    try {
        display = eval(display);
        document.querySelector('input').value = display;
    } catch (error) {
        document.querySelector('input').value = 'Error';
        display = '';
    }
}
