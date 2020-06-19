import { Component, OnInit } from '@angular/core';
import { SexEnum } from 'src/app/enums/sex.enum';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  keys = Object.keys;
  sexEnum = SexEnum;

  constructor() { }

  ngOnInit() {
  }

}
