document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.circle-container');
    const totalItems = 24;
    const radius = 130; // 원의 반지름
    const angleStep = (2 * Math.PI) / totalItems; // 라디안 값으로 변환

    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = i + 1;

        // X, Y 좌표 계산
        const x = Math.cos(i * angleStep) * radius;
        const y = Math.sin(i * angleStep) * radius;

        // 위치 설정
        item.style.transform = `translate(${x}px, ${y}px)`;
        container.appendChild(item);
    }
});
