import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataStoreRoutingModule } from './data-store-routing.module';
import { DataStoreComponent } from './data-store.component';



@NgModule({
  declarations: [
    DataStoreComponent
  ],
  imports: [
    CommonModule,
    DataStoreRoutingModule
  ]
})
export class DataStoreModule { }
