class Counter   {
    constructor()   {
        this.count = 0;
    }
    increment() {
        this.count = this.count + 1;
        // console.log("count incremented");
        countValue = document.getElementById("count-value");
        countValue.innerText = `Count: ${count}`;
    }
    decrement() {
        this.count = this.count - 1;
        // console.log("count decremented");
        countValue = document.getElementById("count-value");
        countValue.innerText = `Count: ${this.count}`;
    }
    Render()    {
        const counterContainer = document.createElement("div");
        const countValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");
    
        counterContainer.classList.add("counter-container");
        countValue.id = "count-value";
        incrementButton.classList.add("increment-btn");
        decrementButton.classList.add("decrement-btn");
    
        countValue.innerText = `count: ${count}`;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";

        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(countValue);
        counterContainer.appendChild(decrementButton);
        
        // incrementButton.onclick = this.increment;
        // decrementButton.onclick = this.decrement;
        incrementButton.addEventListener('click',increment);
        decrementButton.addEventListener('click',decrement);

        return counterContainer;
    }
    mount(el){
        if (this.isMounted) return
        if(el){
            el.appendChild(this.Render());
            this.isMounted = true;
            return;
        }
        document.body.appendChild(this.Render());
        this.isMounted = true;
        return;
    }
}

export { Counter };