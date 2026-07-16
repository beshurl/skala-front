const gradeGameButtonClick = () => {
    const subjects = ["HTML", "CSS", "JavaScript", "Java", "SQL"];
    let total = 0;

    for (let i = 0; i < subjects.length; i++) {
        const input = prompt(`${subjects[i]} 점수를 입력하세요.`);

        if (input === null) return;

        const score = Number(input);

        if (Number.isNaN(score) || score < 0 || score > 100) {
            alert("0~100 사이의 숫자를 입력해주세요.");
            i--;
            continue;
        }

        total += score;
    }

    const avg = total / subjects.length;
    const isPass = avg >= 60
        ? "합격입니다! 우수자로 선정되었습니다."
        : "아쉽네요. 좀 더 열심히 해보아요!!";

    alert(`===== 성적 결과표 =====
총점: ${total}점
평균: ${avg.toFixed(2)}점
======================
결과: ${isPass}`
    );
};