import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CartCardComponent } from './Components/cart-card/cart-card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IndexComponent } from './View/index/index.component';
import { CardComponent } from './Components/card/card.component';
import { ProductDetailsComponent } from './View/product-details/product-details.component';
import { ContactComponent } from './View/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './View/about/about.component';
import { CartComponent } from './View/cart/cart.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartCardComponent,
    IndexComponent,
    CardComponent,
    ProductDetailsComponent,
    ContactComponent,
    AboutComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
