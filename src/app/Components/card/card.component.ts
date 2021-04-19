import { Component, OnInit, Input } from '@angular/core';
import { ProductHolderService } from '../../product-holder.service';
import { ShoppingCartService } from '../../shopping-cart.service';
import { Router } from '@angular/router';
import { CartCounterServiceService } from 'src/app/cart-counter-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() details: any;
  @Input() list = [];
  message = 'this prouduct is out of range';
  constructor(
    private counter: CartCounterServiceService,
    private productHolder: ProductHolderService,
    private shoppingCart: ShoppingCartService
  ) {}

  saveProduct(): void {
    this.productHolder.setProduct(this.details);
  }
  ngOnInit(): void {}
  addToCart(): void {
    this.counter.setItems(this.details);
    this.shoppingCart.getList().subscribe((res) => {
      // tslint:disable-next-line:triple-equals
      if (this.details['Quantity'] == 0) {
        return false;
      } else {
        this.details['RequestedQuantity'] = 1;
        res.push(this.details);
        localStorage.setItem('dataSource', JSON.stringify(res));
        this.details['Quantity'] -= 1;
      }
    });
  }
}
