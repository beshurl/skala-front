const showMyBag = () => {
    const myBag = new Map([
        ["동전", 2],
        ["마우스", 1],
        ["노트북", 1]
    ]);

    let message = "";

    for (const [key, value] of myBag) {
        message += `${key} : ${value}개\n`;
    }

    alert(`[내 가방 속 물품 목록]
=====================
${message}=====================
총 물품 종류 : ${myBag.size}가지`);
};