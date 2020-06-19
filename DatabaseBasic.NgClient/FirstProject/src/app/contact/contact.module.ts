import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
