import { Component, OnInit } from '@angular/core';
import { Service } from '../interfaces/service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: Service[];
  constructor() { 
    this.getService();
  }

  ngOnInit(): void {
  }

  getService(){
    this.ServicesService.get().subscribe( (data: Service[]) => {
      this.service  = data;
    }, (error) => {
      console.log(error);
   });
  }

  delete(id){
    if (confirm('Seguro que desea eliminar a un servicio?')){
      this.ServicesService.delete(id).subscribe( (data) => {
        this.getService();
      }, (error) => {
        console.log(error);
     });
    }
    
  }

}
