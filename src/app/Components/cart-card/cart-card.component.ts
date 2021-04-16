import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() details: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.details);
  }
}
