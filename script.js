document.addEventListener("DOMContentLoaded", function () {
    const brailleButtons = document.querySelectorAll(".braille");
    const outputText = document.getElementById("output-text");
    const clearButton = document.getElementById("clear-btn");

    brailleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const letter = button.getAttribute("data-letter");
            outputText.value += letter; // Append letter to text area
        });
    });

    clearButton.addEventListener("click", function () {
        outputText.value = ""; // Clear text area
    });
});
