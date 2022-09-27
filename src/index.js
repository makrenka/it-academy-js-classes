import "./main.scss";
import { Button } from './components/button/button';


let root  = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Button());


// Рекурсия
// Сложить числа 1 + 2 + 3 + ...
// const sumTo = (n) => {
//     if (n === 1) return n;
//     return n + sumTo(n - 1);
// }

// sumTo (10);

// Рекурсия - пример с объектами
// const list = {
//     a: "a",
//     b: "b",
//     next: {
//         a: "a-1",
//         b: "b-1",
//         next: {
//             a: "a-2",
//             b: "b-2",
//             next: null
//         }
//     }
// };

// function showA(list) {
//     console.log(list.a);
//     if (list.next) return showA(list.next);
//     return;
// };
// showA(list);

// while (list) {
//     console.log(list.a);
//     list = list.next;
// };



// Замыкание 
// Сложение чисел
// const sum = (a) => {
//     return (b) => {
//         return a + b;
//     }
// };

// console.log(sum(10)(20));

// Вырезать из строки
// const string = "aaa bbb ccc";

// const searchValue = string.indexOf('bbb')
// console.log(string.slice(searchValue, searchValue + 3))