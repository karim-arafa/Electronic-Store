import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartCounterServiceService {
  constructor() {
    if (!localStorage.getItem('productCount')) { console.log('Nothing here'); }
    else {
      this.items = JSON.parse(localStorage.getItem('productCount'));
      this.configObservable.next(this.items.length);
    }
  }
  items: any = [];
  configObservable = new BehaviorSubject<number>(0);

  setItems(productDetails): void {

    this.items.push(productDetails);
    localStorage.setItem('productCount', JSON.stringify(this.items));
    this.configObservable.next(this.items.length);
  }
}
