import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly CONTACTS_API_URL = environment.API_URL + '/Contacts';

  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.CONTACTS_API_URL);
  }


}
