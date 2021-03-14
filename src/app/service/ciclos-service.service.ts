
import { CiclosInterfaz } from './../utils/CiclosInterfaz';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiclosServiceService {

  ciclos: CiclosInterfaz[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },

    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ]

  constructor() { }

  getAllCiclos(): CiclosInterfaz[] {
    return this.ciclos
  }

  getCicloFIltrado(busqueda: string): CiclosInterfaz[] {
    this.ciclos.filter((elemento) => {
      return elemento
    })
    return [];
  }

}
