import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private HttpClient: HttpClient) { }

  save (users:User){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/users', users, {headers:headers});

  }
}
