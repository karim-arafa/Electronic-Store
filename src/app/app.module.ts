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
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './View/about/about.component';

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
  ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
