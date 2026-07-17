const upDownGameButtonClick = () => {
    const computerNum = Math.floor(Math.random() * 50) + 1;
    let count = 0;

    while (true) {
        const userInput = Number(prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각하는 숫자는 무엇일까요?"));

        if (userInput === 0) {
            alert("게임을 종료합니다.");
            return;
        }

        if (userInput < 1 || userInput > 50) {
            alert("1부터 50 사이의 숫자를 입력해주세요.");
            continue;
        }

        count++;

        if (computerNum > userInput) {
            alert("Up!");
        } else if (computerNum < userInput) {
            alert("Down!");
        } else if (computerNum == userInput) {
            break;
        } else {
            alert("1부터 50 사이의 숫자를 입력해주세요.");
        }
    }

    alert(`축하합니다! ${count}번 만에 맞추셨습니다!`);
};