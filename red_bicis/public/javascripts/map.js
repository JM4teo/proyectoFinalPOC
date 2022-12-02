var map = L.map('main_map').setView([-34.6012424, -58.3861497], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.6012424, -58.3861497]).addTo(map);
L.marker([-34.5995352, -58.3808287]).addTo(map);
L.marker([-34.5995654, -58.3774477]).addTo(map);