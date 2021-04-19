import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity =[] ;
  totalPerProduct = [];
  allTotal: number = 0;
  data: object;

  constructor(private router: Router) {
    
    this.data = JSON.parse(localStorage.getItem('dataSource'));
    
    Object.entries(this.data);
    console.log(Object.keys(this.data).length);
    for (let i = 0; i < Object.keys(this.data).length; i++) {
        this.totalPerProduct[i] = this.data[i]['RequestedQuantity'] * this.data[i]['Price'];

        this.data[i]['totalPerProduct']=this.totalPerProduct[i];
        this.allTotal = this.allTotal + this.totalPerProduct[i];

    }

  }
  
  ChangeQuantity(product): void {
    this.allTotal = this.allTotal -  product["totalPerProduct"];
    product["totalPerProduct"]=product['Price']*product['RequestedQuantity'];
    this.allTotal = this.allTotal +  product["totalPerProduct"];

  }

  ngOnInit(): void {

  }

  
  checkout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

