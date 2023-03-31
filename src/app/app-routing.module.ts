import { DataStoreComponent } from './modules/data-store/data-store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DataStoreComponent,
    loadChildren: () =>
      import('./modules/data-store/data-store.module').then(
        (m) => m.DataStoreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
