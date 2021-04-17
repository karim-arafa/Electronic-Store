import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingCartService } from '../../shopping-cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private shoppingCart: ShoppingCartService
  ) {}


    totalLength:any;
    page:number=1;

  products: any = [];

  ngOnInit(): void {
    this.http
      .get(
        'https://afternoon-falls-30227.herokuapp.com/api/v1/products?page=1&limit=123'
      )
      .subscribe((data) => {
        this.products = data;
        
       this.totalLength = data['total_items'];
      
       
      });
      
  }
}
