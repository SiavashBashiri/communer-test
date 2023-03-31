import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule],
  exports: [MapComponent],
})
export class MapModule {}
