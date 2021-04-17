import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart.service';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() details: any;
  reqQuantity = 1;
  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    console.log(this.details);
  }

  // tslint:disable-next-line:typedef
  addToCart() {

  this.shoppingCart.getList().subscribe((res)=>{
          this.details['RequestedQuantity'] = this.reqQuantity;
          Object.entries(this.details);
          res.push(this.details);
          localStorage.setItem('dataSource', JSON.stringify(res));

      })

  }
}
