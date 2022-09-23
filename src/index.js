import "./main.scss";
import { Button } from './components/button/button';


let root  = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Button());



// const add = (...num) => {
//     let sum = 0;
//     for (let arg of num) {
//         sum += arg;
//     };
//     return sum;
// };

// add(1, 2, 3);
// console.log(add);

// const min = (a, b) => {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// };

// min(1, 2);

