document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".circle-container");
    const numItems = 24;
    const radius = 250; // 원 반지름
    const centerX = 150; // 컨테이너 중앙 X 좌표
    const centerY = 250; // 컨테이너 중앙 Y 좌표

    for (let i = 0; i < numItems; i++) {
        const angle = (i / numItems) * (2 * Math.PI) - Math.PI / 2; // -90도(맨 위 정렬)
        const x = centerX + radius * Math.cos(angle) - 20; // X 위치 조정
        const y = centerY + radius * Math.sin(angle) - 20; // Y 위치 조정

        const item = document.createElement("div");
        item.classList.add("circle-item");
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.textContent = i + 1; // 숫자 표시

        container.appendChild(item);
    }
});
