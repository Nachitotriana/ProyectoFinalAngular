import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private rutas: Router) { }



  ngOnInit(): void {

  }

  navegar(aDnDvas: String) {
    this.rutas.navigate([aDnDvas])
  }

}
