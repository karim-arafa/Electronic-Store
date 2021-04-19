import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit {
  @Input() details: any;
  reqQuantity = 1;
  constructor(private shoppingCart: ShoppingCartService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.details);
  }


  addToCart() {
  this.shoppingCart.getList().subscribe((res)=>{
          if (this.reqQuantity > this.details['Quantity']){
            this.reqQuantity = this.details['Quantity'];
          }
          this.details['RequestedQuantity'] = this.reqQuantity;
          Object.entries(this.details);
          res.push(this.details);
          localStorage.setItem('dataSource', JSON.stringify(res));
      });
  this.router.navigate(['/cart']);
  }
}
