import { Component, HostBinding, OnInit } from '@angular/core';
import { Service } from 'src/app/models/Service';
import { ServicioService } from 'src/app/services/servicio.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  services:any = [];
  constructor(private servicioService:ServicioService, private spinner:SpinnerService) { }

  ngOnInit(): void {
    this.spinner.getSpinner();
    this.servicioService.getServices().then((snapshot)=>{
      snapshot.forEach((doc: { data: () => { (): any; new(): any; id: any; serviceName: any; serviceDescription: any; imageURL: any;
        identifierType:any, identifierSource:any}; }) => {
        let p: Service = {
          id: doc.data().id,
          serviceName: doc.data().serviceName,
          serviceDescription: doc.data().serviceDescription,
          imageURL: doc.data().imageURL,
          identifierType: doc.data().identifierType,
          identifierSource: doc.data().identifierSource,
        };
        this.services.push(p);
      });
      this.spinner.stopSpinner();
    }).catch((error)=>{
      console.log('Error getting documents', error);
      this.spinner.stopSpinner();
    });
  }
}
