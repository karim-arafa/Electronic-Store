import { Component, OnInit, Input } from '@angular/core';
import { CartCounterServiceService } from '../../cart-counter-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  numberOfItems: number;
  products: any = [];

  constructor(private counter: CartCounterServiceService) {
    // let data = JSON.parse(localStorage.getItem('dataSource'));
    // if (data) {
    //   Object.entries(data);
    //   this.numberOfItems = data.length;
    //   console.log(this.numberOfItems);
    // } else {
    //   this.numberOfItems = 0;
    // }
    console.log('Number is ' + this.numberOfItems);
    this.counter.configObservable.subscribe((value) => {
      console.log(value);

      this.numberOfItems = value;
    });
  }
}
