function rollDice() {
    const numOfDices = document.getElementById("numberOfDice").value;
    const DiceResults = document.getElementById("DiceResults");
    const DiceImg = document.getElementById("DiceImg");

    DiceResults.textContent = "";
    DiceImg.innerHTML = "";

    if (!numOfDices || numOfDices < 1) {
        DiceResults.textContent = "Please enter a valid number of dice!";
        return;
    }

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDices; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice_Images/${value}.png" alt="Dice ${value}">`);
    }

    DiceResults.textContent = `You rolled: ${values.join(", ")}`;
    DiceImg.innerHTML = images.join("");
}
