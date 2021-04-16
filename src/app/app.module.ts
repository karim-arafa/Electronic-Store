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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartCardComponent,
    IndexComponent,
    CardComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
