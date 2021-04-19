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
    
   
    return null;
  }
  setHeroes(Heroes: any) {
    
  }
}
