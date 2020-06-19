import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { SexEnum } from '../enums/sex.enum';
import { Observable, of, pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoading: boolean;
  // contacts: Contact[];
  contacts$: Observable<Contact[]>;

constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.isLoading = true;

    this.contacts$ = this.contactService.getContacts().pipe(
      tap({complete: () => this.isLoading = false})
    );

    // this.contactService.getContacts().subscribe(
    //   data => this.contacts = data,
    //   error => console.log(error),
    //   () => this.isLoading = false
    // );
  }


}
