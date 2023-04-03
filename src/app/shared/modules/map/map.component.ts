import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import * as L from 'leaflet';
import { markerIcon, tiles } from 'src/app/modules/data-store/consts/map.const';
import { LocationModel } from '../../../modules/data-store/models/location.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() location!: LocationModel;
  @Input() isShowMap!: boolean;
  @Output() selectedLocation = new EventEmitter<number[]>();

  private layer!: L.Layer;
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initializeMap();
    this.selectLocation();
    if (this.location) this.setMarker();
  }

  ngOnChanges(): void {
    if (!this.isShowMap) {
      this.map.remove();
      this.configureDefaultLocationMap();
      tiles.addTo(this.map);
    }
  }

  private initializeMap(): void {
    this.configureDefaultLocationMap();
    if (this.location?.latlng?.length) this.configurePresetLocationMap();
    tiles.addTo(this.map);
  }

  private configureDefaultLocationMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });
  }

  private configurePresetLocationMap(): void {
    this.map.remove();
    this.map = L.map('map', {
      center: [this.location.latlng[0], this.location.latlng[1]],
      zoom: 12,
    });
  }

  private setMarker(): void {
    this.layer = L.marker(this.location.latlng, { icon: markerIcon }).addTo(this.map);
  }

  private checkMarkerExictancy(): void {
    if (this.layer !== undefined) {
      this.layer.remove();
    }
  }

  private selectLocation(): void {
    this.map.on('click', e => {
      this.checkMarkerExictancy();
      const coord = e.latlng;
      const lat = coord.lat;
      const lng = coord.lng;
      this.layer = L.marker([lat, lng], { icon: markerIcon }).addTo(this.map);
      this.selectedLocation.emit([lat, lng]);
    });
  }
}
