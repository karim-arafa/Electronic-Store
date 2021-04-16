import { Component, OnInit, Input } from '@angular/core';
import { ProductHolderService } from '../../product-holder.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() details: any;
  constructor(private productHolder: ProductHolderService) {}

  saveProduct(): void {
    this.productHolder.setProduct(this.details);
  }
  ngOnInit(): void {}
  addToCart(): void {
    console.log(this.details);
  }
}
