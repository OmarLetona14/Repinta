import { Component, OnInit } from '@angular/core';
import { PlatarformService } from './services/platarform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mobile:boolean = true;
  constructor(private platformService:PlatarformService){}
  ngOnInit(): void {
    this.mobile = this.platformService.isMobile();
  }
  title = 'Repinta';


}
