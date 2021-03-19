import { element } from 'protractor';
import { ConocimientosInterfaz } from './../../utils/ConocimientosInterfaz';
import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/service/asignatura.service';
import { AsignaturaInterzaz } from 'src/app/utils/AsignaturaInterfaz';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: AsignaturaInterzaz[] = []
  conocimientos: any[] = []
  gradoFiltrado: string = ""
  cicloFiltrado: string = ""
  conocimientoFiltrado: string = ""
  listaFiltada: any[] = []
  numeroFiltradas: number = 0

  constructor(private servicioDatos: AsignaturaService) { }

  ngOnInit(): void {
    this.asignaturas = this.servicioDatos.getAllCiclos()
    this.asignaturas.forEach(element => { this.conocimientos.push(element.conocimientos) })
    this.listaFiltada = this.asignaturas
    this.numeroFiltradas = this.listaFiltada.length
  }



  botonFiltrar(nombreFiltrado: string, cicloFiltrado: string, conocimientoFiltrado: string) {

    this.gradoFiltrado = nombreFiltrado
    this.cicloFiltrado = cicloFiltrado
    this.conocimientoFiltrado = conocimientoFiltrado
    this.listaFiltada = []


    if (this.gradoFiltrado == "" && this.cicloFiltrado == "" && this.conocimientoFiltrado == "") {
      console.log("Tienes que añadir algo para filtrar");
      this.listaFiltada = this.asignaturas

    } else if (this.gradoFiltrado !== "" && this.cicloFiltrado == "" && this.conocimientoFiltrado == "") {

      this.asignaturas.forEach(elemento => {
        if (elemento.nombre.toLowerCase().includes(this.gradoFiltrado.toLowerCase())) {
          this.listaFiltada.push(elemento)
        }
      })

    } else if (this.gradoFiltrado == "" && this.cicloFiltrado !== "" && this.conocimientoFiltrado == "") {

      this.asignaturas.forEach(elemento => {
        if (elemento.ciclo.toLowerCase().includes(this.cicloFiltrado.toLowerCase())) {
          this.listaFiltada.push(elemento)
        }
      })
    } else if (this.gradoFiltrado == "" && this.cicloFiltrado == "" && this.conocimientoFiltrado !== "") {
      this.asignaturas.forEach(elemento => {
        elemento.conocimientos.forEach(elemento2 => {
          if (elemento2.nombre == conocimientoFiltrado.toLowerCase()) this.listaFiltada.push(elemento)
        });
      });

    } else if (this.gradoFiltrado !== "" && this.cicloFiltrado !== "" && this.conocimientoFiltrado == "") {

      this.asignaturas.forEach(elemento => {
        if (elemento.nombre.toLowerCase().includes(this.gradoFiltrado.toLowerCase()) && elemento.ciclo.toLowerCase().includes(this.cicloFiltrado.toLowerCase())) {
          this.listaFiltada.push(elemento)
        }
      })
    } else if (this.gradoFiltrado !== "" && this.cicloFiltrado == "" && this.conocimientoFiltrado !== "") {
      this.asignaturas.forEach(elemento => {
        elemento.conocimientos.forEach(elemento2 => {
          if (elemento2.nombre == conocimientoFiltrado.toLowerCase() && elemento.nombre.toLowerCase().includes(this.gradoFiltrado.toLowerCase())) this.listaFiltada.push(elemento)
        });
      })

    } else if (this.gradoFiltrado == "" && this.cicloFiltrado !== "" && this.conocimientoFiltrado !== "") {
      this.asignaturas.forEach(elemento => {
        elemento.conocimientos.forEach(elemento2 => {
          if (elemento2.nombre == conocimientoFiltrado.toLowerCase() && elemento.ciclo.toLowerCase().includes(this.cicloFiltrado.toLowerCase())) this.listaFiltada.push(elemento)
        });
      })
    }
    else if (this.gradoFiltrado !== "" && this.cicloFiltrado !== "" && this.conocimientoFiltrado !== "") {
      this.asignaturas.forEach(elemento => {
        elemento.conocimientos.forEach(elemento2 => {
          if (elemento2.nombre == conocimientoFiltrado.toLowerCase() && elemento.ciclo.toLowerCase().includes(this.cicloFiltrado.toLowerCase()) && elemento.nombre.toLowerCase().includes(this.gradoFiltrado.toLowerCase())) this.listaFiltada.push(elemento)
        });
      })

      //console.log(this.gradoFiltrado, this.cicloFiltrado, this.conocimientoFiltrado);


    }
    this.numeroFiltradas = this.listaFiltada.length
  }

}
