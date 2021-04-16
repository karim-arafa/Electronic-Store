import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  errors = [];
  contactForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    message: ['', Validators.required],
    name: ['', Validators.required],
    subject: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: FormGroup) {
    if (form.valid) {
      const msg = form.value;
      this.contactService.contactForm(msg).subscribe(
        (res: any) => {
          this.errors = [];
          this.router.navigate(['/']);
        },
        (err: any) => {
          console.log(err);
          this.errors = err.error.error || [];
        });
    }
  }

}
