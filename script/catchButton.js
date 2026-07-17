const catchButton = document.querySelector("#catch-button");
const catchBackground = document.querySelector("#catch-background");
const catchTimer = document.querySelector("#catch-timer");
const catchClose = document.querySelector("#catch-close");
const escapeButton = document.querySelector("#escapeButton");
let catchStartTime;
let catchTimerInterval;

catchButton.addEventListener("click", () => {
    catchBackground.style.display = "block";
    escapeButton.style.display = "block";
    escapeButton.style.left = "50%";
    escapeButton.style.top = "50%";
    escapeButton.style.transform = "translate(-50%, -50%)";

    catchStartTime = Date.now();
    catchTimer.textContent = "0.00초";

    catchTimerInterval = setInterval(() => {
        const currentTime = Date.now();
        const playTime = (currentTime - catchStartTime) / 1000;

        catchTimer.textContent = `${playTime.toFixed(2)}초`;
    }, 10);
});

catchClose.addEventListener("click", () => {
    clearInterval(catchTimerInterval);
    catchBackground.style.display = "none";
    escapeButton.style.display = "none";
});

escapeButton.addEventListener("click", () => {
    const catchEndTime = Date.now();
    const catchTime = (catchEndTime - catchStartTime) / 1000;

    clearInterval(catchTimerInterval);
    catchBackground.style.display = "none";
    escapeButton.style.display = "none";

    alert(`버튼을 잡는데 ${catchTime.toFixed(2)}초 걸렸습니다!`);
});

escapeButton.addEventListener("mouseenter", (event) => {
    const buttonPosition = escapeButton.getBoundingClientRect();
    const buttonCenterX = buttonPosition.left + buttonPosition.width / 2;
    const buttonCenterY = buttonPosition.top + buttonPosition.height / 2;
    const moveDistance = 120;

    let moveX;
    let moveY;

    if (event.clientX < buttonCenterX) {
        moveX = buttonPosition.left + moveDistance;
    } else {
        moveX = buttonPosition.left - moveDistance;
    }

    if (event.clientY < buttonCenterY) {
        moveY = buttonPosition.top + moveDistance;
    } else {
        moveY = buttonPosition.top - moveDistance;
    }

    const maxX = window.innerWidth - buttonPosition.width;
    const maxY = window.innerHeight - buttonPosition.height;

    moveX = Math.max(0, Math.min(moveX, maxX));
    moveY = Math.max(0, Math.min(moveY, maxY));

    escapeButton.style.left = `${moveX}px`;
    escapeButton.style.top = `${moveY}px`;
    escapeButton.style.transform = "none";
});
