const speedGameClick = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    const begin = Date.now();

    const userAns = prompt(`${num1} + ${num2} = ?\n(5초 안에 풀어야 합니다.)`);

    if (userAns === null) return;

    const end = Date.now();
    const count = end - begin;

    if (count > 5000) {
        alert("시간 초과입니다!");
        return;
    }

    if (userAns === "") {
        alert("아무 값도 입력하지 않았습니다.");
    } else if (Number(userAns) === num1 + num2) {
        alert("정답입니다!");
    } else {
        alert("오답입니다!");
    }
};