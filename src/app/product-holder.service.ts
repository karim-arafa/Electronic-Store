import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductHolderService {
  constructor() {
    this.product = JSON.parse(localStorage.getItem('product'));
  }

  product: any = {};
  getProduct(): Observable<any> {
    console.log('i was returned');
    return this.product;
  }
  setProduct(Product: any) {
    this.product = Product;
    localStorage.setItem('product', JSON.stringify(this.product));
    console.log('I was Pushed');
  }
}
