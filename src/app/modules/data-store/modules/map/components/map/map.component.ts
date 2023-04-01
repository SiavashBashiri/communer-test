import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  layer!: L.Layer;
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    this.selectLocation();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private selectLocation() {
    var myIcon = L.icon({
      iconUrl: '/assets/images/location.png',
      iconSize: [38, 38],
      shadowUrl: '/assets/images/shadow.png',
      shadowSize: [38, 38],
      shadowAnchor: [10, 25],
    });

    this.map.on('click', e => {
      if (this.layer !== undefined) {
        this.layer.remove();
      }
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      this.layer = L.marker([lat, lng], { icon: myIcon }).addTo(this.map);
    });
  }
}
