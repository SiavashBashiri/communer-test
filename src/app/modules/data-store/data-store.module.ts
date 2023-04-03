import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataStoreRoutingModule } from './data-store-routing.module';
import { DataStoreComponent } from './data-store.component';
import { MapModule } from '../../shared/modules/map/map.module';

@NgModule({
  declarations: [DataStoreComponent],
  imports: [
    CommonModule,
    DataStoreRoutingModule,
    MapModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DataStoreModule {}
