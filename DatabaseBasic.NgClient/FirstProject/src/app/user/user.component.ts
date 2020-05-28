import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  uzytkownik: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // return this.dataService.getUsers()
    // .subscribe(data => this.users = data);
    return this.getUser(1);
  }

  getUser(id: number): any {
    return this.dataService.getUser(id)
    .subscribe( u => this.uzytkownik = u);
  }

}
