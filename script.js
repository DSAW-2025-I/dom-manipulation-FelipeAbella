const images = document.querySelectorAll('.carousel_image');
const btn_prev = document.getElementById('btn_prev');
const btn_next = document.getElementById('btn_next');
let current_index = 0;

function update_carousel() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === current_index);
    });

    btn_prev.disabled = current_index === 0;
    btn_next.disabled = current_index === images.length - 1;
}

btn_prev.addEventListener('click', () => {
    if (current_index > 0) {
        current_index--;
        update_carousel();
    }
});

btn_next.addEventListener('click', () => {
    if (current_index < images.length - 1) {
        current_index++;
        update_carousel();
    }
});

update_carousel();
