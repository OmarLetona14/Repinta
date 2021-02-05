import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  repintaLogo = 'https://firebasestorage.googleapis.com/v0/b/repinta-7d160.appspot.com/o/repinta_nobg_logo_croped.png?alt=media&token=50948fdc-a5ca-4d6d-afc7-078763abb6fe'
  constructor() { }

  ngOnInit(): void {
  }

}
