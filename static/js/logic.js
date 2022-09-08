// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map= L.map('mapid').setView([35.2220, -101.8313], 5);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "white",
//     fillColor: '#e5e590'
// }).addTo(map);

// // An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [39.7392, -104.9903],
//     city: "Denver",
//     state: "CO",
//     population: 715878
// },

//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   },
//  {
//   location: [47.6062, -122.3321],
//   city: "Seattle",
//   state: "WA",
//   population: 741251
//  },
// {
//  location: [37.7749, -122.4194],
//  city: "San Francisco",
//  state: "CA",
//  population: 874784
// },
// {
//  location: [40.7608, -111.8910],
//  city: "Salt Lake City",
//  state: "UT",
//  population: 200133
// }
//   ];

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// // Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088],
//     [39.7392, -104.9903],
//     [33.4484, -112.0740],
//     [40.7128, -74.0059],
//     [29.7604, -95.3698],
//     [41.8781, -87.6298]

//   ];
 
//   // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow",
//     weight: 4,
//     opacity: 0.25,
//     dashArray: 5,
//     dashOffset: 10,
//   }).addTo(map);

// Loop through the cities array and create one marker for each city. /20000 divides the population by 20000, 
//population size perspective, so it does't take up the whole screen, you can play with this number, always want them smaller and divided!
// cities.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",

//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]},

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng);
    .bindPopup("<h2>" + feature.properties.city + "</h2>")
  }

}).addTo(map);

