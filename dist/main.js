var map = L.map('map').setView([48.8566969, 2.3514616], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(map);
setTimeout(function () { map.invalidateSize() }, 800);
