import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private HttpClient: HttpClient) { }

  save (category:Category){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/category', category, {headers:headers});

  }
  get (){
    return this.HttpClient.get(this.API_ENDPOINT + '/category');
  }

  put (category){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.HttpClient.put(this.API_ENDPOINT + '/category/' + category.id, category, {headers:headers});

  }

  delete (id){
    return this.HttpClient.delete(this.API_ENDPOINT + '/category/' + id);
  }

  
}
