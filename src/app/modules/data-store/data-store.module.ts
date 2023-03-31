import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataStoreRoutingModule } from './data-store-routing.module';
import { DataStoreComponent } from './data-store.component';
import { MapModule } from './modules/map/map.module';

@NgModule({
  declarations: [DataStoreComponent],
  imports: [CommonModule, DataStoreRoutingModule, MapModule],
})
export class DataStoreModule {}
