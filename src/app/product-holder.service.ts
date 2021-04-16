import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductHolderService {
  constructor() {}
  product: any = {};
  getProduct(): Observable<any> {
    console.log('i was returned');
    return this.product;
  }
  setProduct(Product: any) {
    this.product = Product;
    console.log('I was Pushed');
  }
}
