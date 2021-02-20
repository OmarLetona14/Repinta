import { Component, OnInit } from '@angular/core';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { Image } from 'src/app/models/Image';
import { ContactService } from 'src/app/services/contact.service';
import { ImageService } from 'src/app/services/image.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  images:any = [];
  over:boolean = false;
  coverImg:string ='';
  constructor(private imageService:ImageService, private spinner:SpinnerService) { }

  ngOnInit(): void {
    this.loadImages();
    this.coverImg = this.getImageByName('Repinta cover image');
  }

  private loadImages():void{
    this.spinner.getSpinner();
    this.imageService.getImages().then(snapshot =>{
      snapshot.forEach(doc => {
        let p: Image = {
          id: doc.data().id,
          imgName: doc.data().imgName,
          imgDescription: doc.data().imgDescription,
          url: doc.data().url
        };
        this.images.push(p);
      });
      this.spinner.stopSpinner();
    }).catch((errors)=>{
      console.log(errors);
      this.spinner.stopSpinner();
    });
  }

  getImageByName(name:string):string{
    this.images.forEach(element => {
      if(element!=null){
        if(element.imgName.toString().toLowerCase().trim() 
        == name.toLowerCase().trim()){
          console.log(element.url);
          return element.url;
        }
      }
    });
    return null;
  }

}
