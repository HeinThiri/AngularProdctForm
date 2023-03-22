import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'list',component:ProductInfoComponent},
  {path:'edit/:id',component:ProductComponent},
  {path : '', pathMatch: 'full', redirectTo:'/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
