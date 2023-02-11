let intervalId;
let seconds = 0;

function startCount()   {
    seconds = seconds + 1;
    timerValue.innerText = `Time : ${seconds} seconds`;    
}

function startTimer()    {
        intervalId = setInterval(startCount, 1000);
    }

function pauseTimer()    {
    clearInterval(intervalId);
}

function resetTimer()    {
    clearInterval(intervalId);
    seconds = 0;
    timerValue.innerText = `Time : ${seconds} seconds`;
}

function createTimer()   {
    const timerContainer = document.createElement("div");
    const timerHeading = document.createElement("h1");
    const timerPara = document.createElement("p");
    const startButton = document.createElement("button");
    const pauseButton = document.createElement("button");
    const resetButton = document.createElement("button");

    timerContainer.classList.add("timerContainer");
    timerHeading.classList.add("timerHeading");
    timerPara.id = "timerValue";
    startButton.id = "start";
    pauseButton.id = "pause";
    resetButton.id = "reset";

    timerHeading.innerText = "Timer";
    timerPara.innerText = `Time  : ${seconds} seconds`;
    startButton.innerText = "Start";
    pauseButton.innerText = "Pause";
    resetButton.innerText = "Reset";

    startButton.addEventListener("click", startTimer);
    pauseButton.onclick = pauseTimer;
    resetButton.onclick = resetTimer;
        
    timerContainer.appendChild(timerHeading);
    timerContainer.appendChild(timerPara);
    timerContainer.appendChild(startButton);
    timerContainer.appendChild(pauseButton);
    timerContainer.appendChild(resetButton);
        
    // const rootDiv = document.getElementById("root");
    // rootDiv.appendChild(timerContainer);
    return timerContainer;
}

export { createTimer };