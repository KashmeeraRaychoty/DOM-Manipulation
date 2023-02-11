import { createCounter } from "./counter/counter.js";
import { createTimer } from "./timer/timer.js";

let result = document.querySelector('#result');
document.body.addEventListener('change', function (e) {
    let target = e.target;
    let res;
    switch (target.id) {
        case 'counter':
            res = createCounter();
            break;
        case 'timer':
            res = createTimer();
            break;
    }
    result.appendChild(res);
});