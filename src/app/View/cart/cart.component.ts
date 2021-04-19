import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity = [] ;
  totalPerProduct = [];
  allTotal: number = 0;
  data: object;
  index: number;

  constructor(private router: Router) {
    if (!localStorage.getItem('dataSource')){
      alert('nothing in the cart yet');
      this.checkout();
    }else {
    this.data = JSON.parse(localStorage.getItem('dataSource'));
    Object.entries(this.data);
    for (let i = 0; i < Object.keys(this.data).length; i++) {
        this.totalPerProduct[i] = this.data[i]['RequestedQuantity'] * this.data[i]['Price'];
        this.data[i]['totalPerProduct']=this.totalPerProduct[i];
        this.allTotal = this.allTotal + this.totalPerProduct[i];
    }}
  }

  ChangeQuantity(product): void {
    if (product['RequestedQuantity'] >= product['Quantity']){
        product['RequestedQuantity'] = product['Quantity'];
        this.index = 1;
    }else {
        this.index = 0;
    }
    this.allTotal = this.allTotal -  product["totalPerProduct"];
    product["totalPerProduct"] = product['Price']*product['RequestedQuantity'];
    this.allTotal = this.allTotal +  product["totalPerProduct"];
  }

  ngOnInit(): void {

  }


  // tslint:disable-next-line:typedef
  checkout() {
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}

