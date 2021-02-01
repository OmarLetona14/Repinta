import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  repintaLogo = 'https://firebasestorage.googleapis.com/v0/b/repinta-7d160.appspot.com/o/repinta_nobg_logo.png?alt=media&token=cca0cc3a-6882-4a34-8fdb-a441c995eea1'
  constructor() { }

  ngOnInit(): void {
  }

}
