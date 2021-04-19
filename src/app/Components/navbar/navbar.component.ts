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
  
    
    this.counter.configObservable.subscribe((value) => {
      this.numberOfItems = value;
    });
  }
}
