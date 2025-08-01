let positionX = 0; // 박스 위치
let positionY = 0; // 박스 위치
const box = document.querySelector(".box");

// keydown: 키를 누를 때마다 계속 발생!
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        positionX += 5;
        box.style.transform = `translate(${positionX}px, ${positionY}px)`; // 실제로 움직이게 하는 부분
    }
    if (e.key === "ArrowLeft") {
        positionX -= 5;
        box.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
    if (e.key === "ArrowUp") {
        positionY -= 5;
        box.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
    if (e.key === "ArrowDown") {
        positionY += 5;
        box.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
});
