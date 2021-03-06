import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogsComponent } from './pages/admin/blogs/blogs.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './pipes/search.pipe';
import { SearchprodPipe } from './pipes/searchprod.pipe';
import { UkrPricePipe } from './pipes/ukr-price.pipe';
import { ProductComponent } from './pages/product/product.component';
import { PizzaComponent } from './pages/product/pizza/pizza.component';
import { SalatComponent } from './pages/product/salat/salat.component';
import { DrinkComponent } from './pages/product/drink/drink.component';
import { HeaderComponent } from './header/header/header.component';
import { BasketComponent } from './pages/basket/basket.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    AdminComponent,
    CategoryComponent,
    ProductsComponent,
    BlogsComponent,
    BlogDetailsComponent,
    SearchPipe,
    SearchprodPipe,
    UkrPricePipe,
    ProductComponent,
    PizzaComponent,
    SalatComponent,
    DrinkComponent,
    HeaderComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
