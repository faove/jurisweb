import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private HttpClient: HttpClient) { }

  save (service:Service){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/service', service, {headers:headers});

  }
  get (){
    return this.HttpClient.get(this.API_ENDPOINT + '/service');
  }

  put (service){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.HttpClient.put(this.API_ENDPOINT + '/service/' + service.id, service, {headers:headers});

  }

  delete (id){
    return this.HttpClient.delete(this.API_ENDPOINT + '/service/' + id);
  }
}
