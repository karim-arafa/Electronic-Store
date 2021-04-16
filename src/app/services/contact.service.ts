import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  contactForm(form){
    return this.http.post(`https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us`, form);
  }
}
