import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationModel } from './models/location.model';
import { DataStoreService } from './services/utilities/data-store.service';

@Component({
  selector: 'app-data-store',
  templateUrl: './data-store.component.html',
  styleUrls: ['./data-store.component.scss'],
})
export class DataStoreComponent implements OnInit {
  locationTypes: Object[] = [
    { id: 1, value: 'Business' },
    { id: 2, value: 'Home' },
    { id: 3, value: 'Gym' },
  ];

  formGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    latlng: new FormControl(null, Validators.required),
    file: new FormControl('', Validators.required),
  });

  location!: LocationModel;
  locationLogo!: string | null;
  isShowMap: boolean = true;

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  onCancelShareLocation(): void {
    this.formGroup.reset();
    this.dataStoreService.removeLocation();
    this.locationLogo = null;
    this.isShowMap = false;
  }

  onProcessFile(event: any) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (event: any) => {
      this.locationLogo = event.target.result as string;
      this.formGroup.controls.file.setValue(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  onSetLocationValue(event: any): void {
    this.formGroup.controls.latlng.setValue(event);
  }

  onSaveLocation(): void {
    if (this.formGroup.valid) this.dataStoreService.saveLocation(this.formGroup.value);
  }

  private getLocation(): void {
    this.location = this.dataStoreService.getLocation();
    if (this.location) {
      this.locationLogo = this.location.file;
      this.formPatchValues();
    }
  }

  private formPatchValues(): void {
    this.formGroup.patchValue({ ...this.location });
  }
}
