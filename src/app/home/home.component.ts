import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //API_ENDPOINT = 'http://localhost:8000/api';
  users: User[];

  constructor(private userService: UsersService) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.get().subscribe( (data: User[]) => {
      this.users  = data;
    }, (error) => {
      console.log(error);
   });
  }

  delete(id){
    if (confirm('Seguro que desea eliminar a un usuario?')){
      this.userService.delete(id).subscribe( (data) => {
        this.getUsers();
      }, (error) => {
        console.log(error);
     });
    }
    
  }

}
