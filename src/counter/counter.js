let count = 0;
function increment() {
    count = count + 1;
    console.log("count incremented");
    const countValue = document.getElementById("countValue");
    countValue.innerText = `Count: ${count}`;
}

function decrement() {
    count = count - 1;
    console.log("count decremented");
    const countValue = document.getElementById("countValue");
    countValue.innerText = `Count: ${count}`;
}

function createCounter()    {
    const counterContainer = document.createElement("div");
    const counterHeading = document.createElement("h1");
    const countValue = document.createElement("p");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");

    counterContainer.classList.add("counterContainer");
    countValue.id = "countValue";
    counterHeading.classList.add("counterHeading");
    incrementButton.classList.add("incrementBtn");
    decrementButton.classList.add("decrementBtn");

    counterHeading.innerText = "Counter";
    countValue.innerText = `Count: ${count}`;
    incrementButton.innerText = "+";
    decrementButton.innerText = "-";

    // incrementButton.onclick = this.increment;
    // decrementButton.onclick = this.decrement;
    incrementButton.addEventListener('click',increment);
    decrementButton.addEventListener('click',decrement);

    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(countValue);
    counterContainer.appendChild(incrementButton);
    counterContainer.appendChild(decrementButton);

    // const rootDiv = document.getElementById("root");
    // rootDiv.append(counterContainer);
    return counterContainer;
}

export { createCounter };