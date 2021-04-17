import { Component, OnInit, Input } from '@angular/core';
import { ProductHolderService } from '../../product-holder.service';
import { ShoppingCartService } from '../../shopping-cart.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() details: any;
  @Input() list = [];
  constructor(private productHolder: ProductHolderService,private shoppingCart: ShoppingCartService) {}

  saveProduct(): void {
    this.productHolder.setProduct(this.details);
  }
  ngOnInit(): void {}
  addToCart(): void {
    this.shoppingCart.getList().subscribe((res)=>{
        this.details['RequestedQuantity'] = 1;
        res.push(this.details);
        localStorage.setItem('dataSource', JSON.stringify(res));

    })
  }
}
