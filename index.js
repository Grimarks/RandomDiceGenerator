function rollDice() {
    const numOfDices = document.getElementById("numberOfDice").value;
    const DiceResults = document.getElementById("DiceResults");
    const DiceImg = document.getElementById("DiceImg");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDices; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice_Images/${value}.png" alt="Dice ${value}">`);
    }

    DiceResults.textContent = `Dice: ${values.join(', ')}`;
    DiceImg.innerHTML = images.join(' ');
}