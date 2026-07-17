const signUpForm = document.querySelector("form");

signUpForm.addEventListener("submit", (event) => {
    const userId = document.querySelector("#userId").value;
    const userPw = document.querySelector("#userPw").value;
    const userEmail = document.querySelector("#userEmail").value;
    const emailDomain = document.querySelector("select[name='emailDomain']").value;
    const userName = document.querySelector("#name").value;
    const userBrith = document.querySelector("#userBrith").value;
    const genderValue = document.querySelector("input[name='gender']:checked").value;
    const interestList = document.querySelectorAll("input[name='interest']:checked");
    const pathSelect = document.querySelector("select[name='path']");
    const intro = document.querySelector("textarea").value;

    let gender = "선택안함";
    let interest = "";

    if (genderValue === "male") {
        gender = "남성";
    } else if (genderValue === "female") {
        gender = "여성";
    }

    interestList.forEach((item) => {
        interest += `${item.parentElement.textContent.trim()}\n`;
    });

    if (interest === "") {
        interest = "선택안함\n";
    }

    const accountInfo = `입력한 회원 정보입니다.

아이디: ${userId}
비밀번호: ${userPw}
이메일: ${userEmail}@${emailDomain}
이름: ${userName || "입력안함"}
생년월일: ${userBrith || "입력안함"}
성별: ${gender}

관심분야:
${interest}
가입 경로: ${pathSelect.options[pathSelect.selectedIndex].text}
자기소개: ${intro || "입력안함"}

확인 버튼을 누르면 회원가입이 완료됩니다.`;

    const confirmResult = confirm(accountInfo);

    if (confirmResult === false) {
        event.preventDefault();
    }
});
