import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  numberOfItems : number;

  constructor() {
       let data = JSON.parse(localStorage.getItem('dataSource'));

       if (data){
        Object.entries(data);
       this.numberOfItems=data.length;
       console.log(this.numberOfItems);
       }else {
        this.numberOfItems=0;
       }
   }
}
