document.addEventListener("DOMContentLoaded", function () {
    function createCircleLayout() {
        const container = document.querySelector(".circle-container");
        container.innerHTML = ""; // 기존 요소 제거 후 다시 생성

        const numItems = 24;
        const screenSize = Math.max(Math.min(window.innerWidth * 0.5, window.innerHeight * 0.8), 250); 
        // 최소 250px, 최대 화면의 50% (가로) 또는 80% (세로)

        const radius = screenSize / 3; // 반지름도 유동적으로 설정
        const centerX = screenSize / 2;
        const centerY = screenSize / 2.5;
        const itemSize = Math.max(screenSize / 10, 30); // 최소 크기 보장

        for (let i = 0; i < numItems; i++) {
            const angle = (i / numItems) * (2 * Math.PI) - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle) - itemSize / 2;
            const y = centerY + radius * Math.sin(angle) - itemSize / 2;

            const item = document.createElement("div");
            item.classList.add("circle-item");
            item.style.width = `${itemSize}px`;
            item.style.height = `${itemSize}px`;
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            item.style.fontSize = `${Math.max(itemSize / 3, 12)}px`; // 최소 폰트 크기 12px 보장
            item.textContent = i + 1;

            container.appendChild(item);
        }
    }

    createCircleLayout();
    window.addEventListener("resize", createCircleLayout); // 창 크기 변경 시 다시 실행
});
