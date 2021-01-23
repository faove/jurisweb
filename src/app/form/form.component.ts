import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  users: User = {
    name: null,
    email: null,
    email_verified_at: null,
    api_token: null,
    expiration_date: null,
    image: null,
    last_login: null
  };
  id:any;
  editing:boolean=false;
  user_array: User[];
  constructor(private usersService: UsersService,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.usersService.get().subscribe( (data: User[]) => {
        this.user_array = data;
        this.users = this.user_array.find( (m) => {return m.id == this.id}  ); 
        console.log(this.users);
      }, (error) => {
        console.log(error);
      });
    }else{
      this.editing = false;
    }
    console.log(this.id);
   }
  
  ngOnInit(): void {
  }

  saveUser(){
    if (this.editing){
      this.usersService.put(this.users).subscribe( (data) => {
        alert('User edit');
        console.log(data);
  
      }, (error) => {
        alert('User edit error');
        console.log(error);
      });
    }else{
      this.usersService.save(this.users).subscribe( (data) => {
        alert('User save');
        console.log(data);
  
      }, (error) => {
        alert('User error');
        console.log(error);
      });
    }
    
  }

}
