import * as L from 'leaflet';

export const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 3,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

export const markerIcon = L.icon({
  iconUrl: '/assets/images/location.png',
  iconSize: [38, 38],
  shadowUrl: '/assets/images/shadow.png',
  shadowSize: [38, 38],
  shadowAnchor: [10, 25],
});
