import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity=[] ;
  totalPerProduct = [];
  allTotal: number = 0;
  data: object;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('dataSource'));
    Object.entries(this.data);
    for (let i = 0; i < Object.keys(this.data).length; i++) {
        this.totalPerProduct[i] = this.data[i]['RequestedQuantity'] * this.data[i]['Price'];
//         this.data[i]['RequestedQuantity']=this.quantity[i];
        this.data[i]['totalPerProduct']=this.totalPerProduct[i];
        this.allTotal = this.allTotal + this.totalPerProduct[i];

    }

  }
  ChangeQuantity(product): void {
    this.allTotal = this.allTotal -  product["totalPerProduct"];
    product["totalPerProduct"]=product['Price']*product['RequestedQuantity'];
    this.allTotal = this.allTotal +  product["totalPerProduct"];

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
//     console.log(this.data);
  }
}

