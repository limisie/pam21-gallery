var display = null;

const openDisplay = (source) => {
    display = document.getElementById('display');

    display.firstChild.src = source;
    display.className = "displayOn";
}

const closeDisplay = () => {
    display = document.getElementById('display');
    display.className = "display";
}