document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.circle-container');
    const totalItems = 24;
    const angleStep = 360 / totalItems; // 15도씩 배치

    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = i + 1;
        item.style.transform = `rotate(${i * angleStep}deg) translateY(-130px)`;
        container.appendChild(item);
    }
});