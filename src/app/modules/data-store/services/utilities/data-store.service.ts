import { Injectable } from '@angular/core';
import { LocationModel } from '../../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  constructor() {}

  saveLocation(location: LocationModel): void {
    localStorage.setItem('location', JSON.stringify(location));
  }

  removeLocation(): void {
    localStorage.removeItem('location');
  }

  getLocation(): LocationModel {
    const location = localStorage.getItem('location');
    return JSON.parse(location!);
  }
}
