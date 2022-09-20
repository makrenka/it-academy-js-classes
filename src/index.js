import "./main.scss";
import { Button } from './components/button/button';

const add123 = (a, b) => a + b;
let root  = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Button());

const res = add123(222, 3);
console.log("Helloasda");