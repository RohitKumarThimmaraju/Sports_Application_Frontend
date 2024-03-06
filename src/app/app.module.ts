import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductServiceService } from './list-product-service.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MenuComponent } from './menu/menu.component';
import { UserListProductsComponent } from './user-list-products/user-list-products.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductFormComponent,
    UpdateProductFormComponent,
    AdminLoginComponent,
    UserLoginComponent,
    MenuComponent,
    UserListProductsComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [ListProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
