import "./main.scss";

const btn = document.querySelector('.btn');

btn.addEventListener('click', (evt) => {
    const event = new CustomEvent('show-notification', {
        bubbles: true,
        detail: {
            title: 'Hello!',
            description: 'I am added',
        }
    });

    evt.currentTarget.dispatchEvent(event);
});

window.addEventListener('show-notification', (evt) => {
    const toast = document.querySelector('.toast');
    toast.classList.add('show');
    toast.querySelector('.me-auto').textContent = evt.detail.title;
    toast.querySelector('.toast-body').textContent = evt.detail.description;
})