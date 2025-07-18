const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const originalText = input.value;
    const regex = /[^0-9]/g;
    const letterRegex = /[^0-9()-]/g;
    if (letterRegex.test(originalText)) result.textContent = `Invalid US number: ${originalText}`;
    
    let text = originalText.replaceAll(regex, "");

    if (!originalText) alert("Please provide a phone number");
    if (text.length === 11 && text[0] === "1") text = text.slice(1,11);
    console.log(text);
    if (text.length !== 10) {
        result.textContent = `Invalid US number: ${originalText}`;
    } else {
        result.textContent = `Valid US number: ${originalText}`;
    }
});

clearBtn.addEventListener("click", () => {
    result.textContent = "";
});