import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesciclosComponent } from './components/detallesciclos/detallesciclos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ciclos', component: CiclosComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'detallesciclos/:curso/:grado', component: DetallesciclosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
