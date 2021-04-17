import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() list = [];
  numberOfItems : number;

  constructor() {


 let data = JSON.parse(localStorage.getItem('dataSource'));
     Object.entries(data);
     this.numberOfItems=data.length;
     console.log(this.numberOfItems);
   }

  ngOnInit(): void {

  }

}
