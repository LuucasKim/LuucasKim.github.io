document.addEventListener("DOMContentLoaded", function () {
    function createCircleLayout() {
        const container = document.querySelector(".circle-container");
        container.innerHTML = ""; // 기존 요소 제거 후 다시 생성

        const numItems = 24;
        let screenSize;
        if(window.innerWidth>window.innerHeight) {
            screenSize = Math.min(window.innerHeight * 0.5); //가로가 긴 데스크탑은 높이 기준
        }
        else {
            screenSize = Math.min(window.innerWidth * 0.8, 300); //세로가 긴 모바일은 너비 기준
        }
        console.log(screenSize);
        const radius = screenSize / 2; // 반지름도 비율에 맞게 조정
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 1.5;
        const itemSize = screenSize / 9; // 원 개별 크기 조절

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
            item.style.fontSize = `${itemSize / 2.5}px`; // 글씨 크기 조정
            item.textContent = i + 1;

            container.appendChild(item);
        }
    }

    createCircleLayout();
    window.addEventListener("resize", createCircleLayout); // 창 크기 변경 시 다시 실행
});
