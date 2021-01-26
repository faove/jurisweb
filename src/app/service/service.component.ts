import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Service } from '../interfaces/service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service: Service = {
    type_services_id: null,
    mode_services_id: null,
    areas_id: null,
    associate_id: null,
    client_id: null,
    rate_variable: null,
    rate_fixed: null,
    rate_process: null,
    phone_service: null,
    chat_service: null,
    chat_service_name: null,
    fee_service: null,
    date_service: null,
    date_aplication: null,
    date_pay: null,
    date_performance: null
  };
  
  service_array: Service[];
  id:any;
  editing:boolean=false;

  constructor(private servicesService: ServicesService) { 
    this.getService();
  }

  ngOnInit(): void {
  }

  getService(){
    this.servicesService.get().subscribe( (data: Service[]) => {
      this.service_array  = data;
    }, (error) => {
      console.log(error);
   });
  }

  delete(id){
    if (confirm('Seguro que desea eliminar a un servicio?')){
      this.servicesService.delete(id).subscribe( (data) => {
        this.getService();
      }, (error) => {
        console.log(error);
     });
    }
    
  }

  saveService(){
    if (this.editing){
      
      this.servicesService.put(this.service).subscribe( (data) => {
        alert('service edit');
        console.log(data);
  
      }, (error) => {
        alert('service edit error');
        console.log(error);
      });
    }else{
      this.servicesService.save(this.service).subscribe( (data) => {
        alert('service save');
        console.log(data);
  
      }, (error) => {
        alert('service error');
        console.log(error);
      });
    }
    
  }

}
