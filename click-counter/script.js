let count = 0;

const button = document.getElementById("clickButton");
const countDisplay = document.getElementById("count");
const message = document.getElementById("message");

button.addEventListener("click", async function () {

    count++;

    countDisplay.innerText = count;

    try {

        const response = await fetch("/save-click", {
            method: "POST"
        });

        const data = await response.json();

        message.innerText = "Saved in clicks.txt";

        console.log(data);

    } catch (error) {

        console.log(error);

        message.innerText = "Error saving count";

    }

});