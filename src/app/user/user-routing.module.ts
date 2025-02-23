import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { DetailsProductosComponent } from './components/details-productos/details-productos.component';
import { HomeUserComponent } from './home/home-user/home-user.component';

const routes: Routes = [
  {path:'home', component: HomeUserComponent},
  {path:'productos/:categoria', component: ListProductosComponent},
  {path:'productos/:id', component: DetailsProductosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
