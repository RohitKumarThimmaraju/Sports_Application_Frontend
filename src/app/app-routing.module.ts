import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { MenuComponent } from './menu/menu.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { UserListProductsComponent } from './user-list-products/user-list-products.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:"product", component:ListProductsComponent},
  {path: 'addProduct', component: ProductFormComponent},
  {path: 'updateProduct/:id', component: UpdateProductFormComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'user', component: UserLoginComponent},
  {path: 'userProduct', component: UserListProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
