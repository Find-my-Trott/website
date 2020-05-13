var map = L.map('map').setView([48.8566969, 2.3514616], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(map);
setTimeout(function () { map.invalidateSize() }, 800);
var marker = L.marker([48.8566969, 2.3514616]).addTo(map);
var marker2 = L.marker([48.8616513, 2.3470129]).addTo(map);

var popup = marker.bindPopup('<b>Lime</b><br />I am available!')
var popup2 = marker2.bindPopup('<b>Lime</b><br />I am available!')