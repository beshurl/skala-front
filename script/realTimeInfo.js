// 1. 방금 만든 weatherAPI.js 모듈에서 핵심 비동기 함수를 쏙 훔쳐옵니다.
import { getLiveWeather } from './weatherAPI.js';

const citySelect = document.querySelector('#weather-selectBox');
const weatherBox = document.querySelector('#weather-box');

citySelect.addEventListener('change', async function(event) {

    console.log("선택된 옵션의 값:", event.target.value); 

    const selectedValue = event.target.value;
    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
        return;
    }

    const coords = selectedValue.split(',');
    const cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p>모듈을 통해 실시간 수신 중... 📡</p>";

    const weatherInfo = await getLiveWeather(coords[0], coords[1]);

    if (weatherInfo) {
        weatherBox.innerHTML = `
            <div style="display: block; border-left:3px solid #7ba4bd; margin-top : 8px; padding: 7px; padding-bottom:  0px; ">
                <div>날씨 피드: ${cityName}</div>
                <p>🌡️ 기온: ${weatherInfo.temp}°C</p>
                <p>💧 습도: ${weatherInfo.humidity}%</p>
            </div>
        `;
    } else {
        weatherBox.innerHTML = "<p>데이터를 불러오지 못했습니다.</p>";
    }
});