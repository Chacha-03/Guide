$(".leaflet-container").css("height", "0vh");

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var settings = {
      "url": "https://api-adresse.data.gouv.fr/search/?q="+$('.input-search').val()+"&type=housenumber&autocomplete=1",
      "method": "GET",
      "timeout": 0,
    };

    $(".leaflet-container").css("height", "90vh");
    $(".leaflet-container").hide(0);
    $(".leaflet-container").show(2000)
    setTimeout(() => {
      $.ajax(settings).done(function (response) {
        LeafletSelection(response.features[0].geometry.coordinates);
      });
    }, 2100)
  })
})



const LeafletSelection = (coordinates) => {

  console.log(coordinates)

  var tableauValeur = [
      [coordinates[1], coordinates[0]],
      [48.805, 2,58],
      [48.705, 2,68],
      [48.605, 2,78],
      [48.505, 2,88]
  ]
  
  var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
  thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
  
  var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; ' + osmLink + ' Contributors',
  landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
  thunAttrib = '&copy; ' + osmLink + ' Contributors & ' + thunLink;
  
  var osmMap = L.tileLayer(osmUrl, {
    attribution: osmAttrib
  }),
  landMap = L.tileLayer(landUrl, {
    attribution: thunAttrib
  });
  
  var map = L.map('map', {
    layers: [osmMap] // only add one!
  })
  .setView([tableauValeur[0][0], tableauValeur[0][1]], 14);
  
  var baseLayers = {
  "OSM Mapnik": osmMap,
  "Landscape": landMap
  };
  
  L.control.layers(baseLayers).addTo(map);
  
  for (const element of tableauValeur) {
      var marker = L.marker([element[0], element[1]]).addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
  }
  
  // var polygon = L.polygon([
  //     [48.900, 2.48],
  //     [48.850, 2.45],
  //     [48.800, 2.40]
  // ]).addTo(map);
  
  // var circle = L.circle([48.950, 2.48], {
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.5,
  //     radius: 500
  // }).addTo(map);
}



////////////////////////////////////////////////////////////////


$(".leaflet-container").css("height", "0vh");

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var settings = {
      "url": "https://api-adresse.data.gouv.fr/search/?q="+$('.input2-search').val()+"&type=housenumber&autocomplete=1",
      "method": "GET",
      "timeout": 0,
    };

    $(".leaflet-container").css("height", "90vh");
    $(".leaflet-container").hide(0);
    $(".leaflet-container").show(2000)
    setTimeout(() => {
      $.ajax(settings).done(function (response) {
        LeafletSelection(response.features[0].geometry.coordinates);
      });
    }, 2100)
  })
})



const LeafletSelection2 = (coordinates) => {

  console.log(coordinates)

  var tableauValeur = [
      [coordinates[1], coordinates[0]],
      [48.805, 2,58],
      [48.705, 2,68],
      [48.605, 2,78],
      [48.505, 2,88]
  ]
  
  var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
  thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
  
  var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; ' + osmLink + ' Contributors',
  landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
  thunAttrib = '&copy; ' + osmLink + ' Contributors & ' + thunLink;
  
  var osmMap = L.tileLayer(osmUrl, {
    attribution: osmAttrib
  }),
  landMap = L.tileLayer(landUrl, {
    attribution: thunAttrib
  });
  
  var map = L.map('map', {
    layers: [osmMap] // only add one!
  })
  .setView([tableauValeur[0][0], tableauValeur[0][1]], 14);
  
  var baseLayers = {
  "OSM Mapnik": osmMap,
  "Landscape": landMap
  };
  
  L.control.layers(baseLayers).addTo(map);
  
  for (const element of tableauValeur) {
      var marker = L.marker([element[0], element[1]]).addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
  }
  
  // var polygon = L.polygon([
  //     [48.900, 2.48],
  //     [48.850, 2.45],
  //     [48.800, 2.40]
  // ]).addTo(map);
  
  // var circle = L.circle([48.950, 2.48], {
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.5,
  //     radius: 500
  // }).addTo(map);
}

