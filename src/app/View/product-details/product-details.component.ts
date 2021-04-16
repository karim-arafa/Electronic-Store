import { Component, OnInit } from '@angular/core';
import { ProductHolderService } from '../../product-holder.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productHolder: ProductHolderService) {}
  product: any = {};

  ngOnInit(): void {
    this.product = this.productHolder.getProduct();
  }
}
