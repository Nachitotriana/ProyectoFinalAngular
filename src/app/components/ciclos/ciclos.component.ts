import { AsignaturaService } from './../../service/asignatura.service';
import { AsignaturaInterzaz } from './../../utils/AsignaturaInterfaz';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { CiclosServiceService } from './../../service/ciclos-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})

export class CiclosComponent implements OnInit {


  ciclos: CiclosInterfaz[] = []
  asignaturasDAM: AsignaturaInterzaz[] = []
  asignaturasDAW: AsignaturaInterzaz[] = []

  constructor(private rutas: Router, private servicioDatos: CiclosServiceService, private serviciDatosAsig: AsignaturaService) {
  }

  ngOnInit(): void {
    this.ciclos = this.servicioDatos.getAllCiclos();
    this.asignaturasDAM = this.serviciDatosAsig.getFiltradaAsignaturas("DAM");
    this.asignaturasDAW = this.serviciDatosAsig.getFiltradaAsignaturas("DAW");
  }

  detallesGrado(aDnDvas: string, ciclo: number, nombre: string) {
    this.rutas.navigate([aDnDvas, ciclo, nombre])
  }



}
