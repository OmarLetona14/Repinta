import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  repintaLogo = 'https://firebasestorage.googleapis.com/v0/b/repinta-7d160.appspot.com/o/repinta_nobg_logo.png?alt=media&token=cca0cc3a-6882-4a34-8fdb-a441c995eea1'
  constructor() { }

  ngOnInit(): void {
  }

}
