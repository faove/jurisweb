import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost:8000/api';
  users: User[];

  constructor(private userService: UsersService, private httpClient: HttpClient) {
      httpClient.get(this.API_ENDPOINT + '/gets').subscribe( (data: User[]) => {
        this.users = data;
      });
   }

  ngOnInit(): void {
  }

}
