var mymap = L.map('mapid').setView([48.5734053, 7.7521113], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY29yaTBsaXMiLCJhIjoiY2tpc200eHJyMG4yeTJybjQwaGR0YWJqOSJ9.zAuVi4VojUX3s5bpFoNg4w'
}).addTo(mymap);

// var greenIcon = L.icon({
//     iconUrl: 'logo.png',
//     // shadowUrl: 'logo.png',

//     iconSize:     [100, 100], // size of the icon
//     // shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     // shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

var marker = L.marker([48.57916455828633, 7.760203076250027]).addTo(mymap);
marker.bindPopup("<img src='logo.png'>").openPopup();

// var marker = L.marker([48.57920233699662, 7.76029695496456]).addTo(mymap);
// marker.bindPopup("<b>Academie de la biere").openPopup();

// var marker = L.marker([48.57950851778686, 7.760686035551027]).addTo(mymap);
// marker.bindPopup("<b>Public House").openPopup();