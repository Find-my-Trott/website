var map = L.map('map').setView([48.8566969, 2.3514616], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(map);
setTimeout(function () { map.invalidateSize() }, 800);
var request = new XMLHttpRequest()

request.open('GET', 'https://cors-anywhere.herokuapp.com/http://findmytrott.com/api/scooters?latitude=48.85341&longitude=2.3488&radius=0.01', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
      data.scooters.forEach(element => {
          if(element.reserved == false){
            var marker = L.marker([element.latitude, element.longitude]).addTo(map);
            var popup = marker.bindPopup(`<b>${element.brand}</b><p>${element.battery_level}%</p>I am available!`)    
          }
     
    });
  } else {
    console.log('error')
  }
}
request.send()
var marker = L.marker([48.8566969, 2.3514616]).addTo(map);
var marker2 = L.marker([48.8616513, 2.3470129]).addTo(map);

var popup = marker.bindPopup('<b>Lime</b><br />I am available!')
var popup2 = marker2.bindPopup('<b>Lime</b><br />I am available!')