const yuuning = document.getElementById("yuuning");
const scoreDisplay = document.getElementById("score");
const clickSound = new Audio("Audio/boing.mp3");


let count = 0;


yuuning.addEventListener("click" , () => {
    count++;
    scoreDisplay.textContent = `Yuuning's Clicked: ${count}`;

    clickSound.currentTime = 0;
    clickSound.play();

    yuuning.style.transform = "scale(1.3)";
    setTimeout(() => {
        yuuning.style.transform = "scale(1)";
    }, 150);
});
