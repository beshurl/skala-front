const windyOptions = {
    key: 'pdroNmyqrYDNf8qCLNgUIFrMSpQWTbJa',
    lat: 37.56,
    lon: 126.97,
    zoom: 5,
    overlay: 'wind',
    lang: 'ko',
    hourFormat: '24h'
};

windyInit(windyOptions, function(windyAPI) {
    const windyMap = windyAPI.map;
    const windyStore = windyAPI.store;
    const citySelect = document.querySelector('#weather-selectBox');
    const windySelect = document.querySelector('#windy-selectBox');

    citySelect.addEventListener('change', function() {
        if (citySelect.value === 'none') {
            return;
        }

        const coords = citySelect.value.split(',');
        const latitude = Number(coords[0]);
        const longitude = Number(coords[1]);

        windyMap.setView([latitude, longitude], 6);
    });

    windySelect.addEventListener('change', function() {
        windyStore.set('overlay', windySelect.value);
    });
});
