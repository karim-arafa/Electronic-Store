import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity = 1 ;
  totalPerProduct: number;
  allTotal: number;
  data: object;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('dataSource'));
    Object.entries(this.data);
    this.totalPerProduct = this.quantity * this.data['Price'];
    // this.allTotal = this.totalPerProduct * 3ddhom;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    console.log(this.data);
  }
}

