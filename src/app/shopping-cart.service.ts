import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}
  list = new BehaviorSubject<any>([]);
  getList():Observable<any>{
  return this.list.asObservable();
  }
  getHeroes(): Observable<any> {
    console.log('Some COurses');
    /*     const heroes = of(this.courses);
    console.log(this.courses);*/
    return null;
  }
  setHeroes(Heroes: any) {
    /* this.courses = Heroes;
    console.log('I was Pushed'); */
  }
}
