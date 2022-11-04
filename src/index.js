import "./main.scss";

const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');

const animateElement = (element, duration, distance) => {
    const frame = duration / 1000 * 60;
    const delta = distance / frame;

    let currentX = element.getBoundingClientRect().x;
    let currentX2 = element.getBoundingClientRect().x;
    const maxX = currentX + distance;    
    
    const timerId = setInterval(() => {
        if(currentX2 < maxX) {
            box2.style.transform = `translateX(${currentX2}px)`;
            currentX2 += delta;
        } else {
            clearInterval(timerId);
        }
    }, 16)

    const step = () => {
        currentX += delta;
        element.style.transform = `translateX(${currentX}px)`;
        if (currentX < maxX) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
};

box.addEventListener('click', () => {
    animateElement(box, 1000, 200);
})
