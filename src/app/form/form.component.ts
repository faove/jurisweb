import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  users: User = {
    id: null,
    name: null,
    email: null,
    email_verified_at: null,
    api_token: null,
    expiration_date: null,
    image: null,
    last_login: null
  };

  constructor(private usersService: UsersService) {
    
   }
  
  ngOnInit(): void {
  }

  saveUser(){
    this.usersService.save(this.users).subscribe( (data) => {
      alert('User save');
      console.log(data);

    }, (error) => {
      alert('User error');
      console.log(error);
    })
  }

}
