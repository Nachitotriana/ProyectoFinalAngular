import { ConocimientosInterfaz } from './../../utils/ConocimientosInterfaz';
import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { CiclosServiceService } from 'src/app/service/ciclos-service.service';
import { AsignaturaInterzaz } from 'src/app/utils/AsignaturaInterfaz';
import { CiclosInterfaz } from 'src/app/utils/CiclosInterfaz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallesciclos',
  templateUrl: './detallesciclos.component.html',
  styleUrls: ['./detallesciclos.component.css']
})
export class DetallesciclosComponent implements OnInit {

  asignaturas: AsignaturaInterzaz[] = []
  ciclos: CiclosInterfaz[] = []
  conocimientos: any[] = []
  curso: number = 0
  grado: string = ""
  imagenGrado: string = ""
  constructor(private servicioDatos: CiclosServiceService, private serviciDatosAsig: AsignaturaService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.curso = this.ruta.snapshot.params.curso;
    this.grado = this.ruta.snapshot.params.grado;

    this.ciclos = this.servicioDatos.getAllCiclos();
    /* this.imagenGrado = this.ciclos.forEach(elemento => { }) */
    this.asignaturas = this.serviciDatosAsig.getAsignaturasFiltradas(this.curso, this.grado);

    this.asignaturas.forEach(element => { this.conocimientos.push(element.conocimientos) })


    this.ciclos.forEach(elementos => {
      if (elementos.nombre.includes(this.grado) && elementos.curso == this.curso) {
        this.imagenGrado = elementos.imagen
      }
    })


  }


}
