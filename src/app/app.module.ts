import { DetallesciclosComponent } from './components/detallesciclos/detallesciclos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { TextosupperPipe } from './pipes/textosupper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    AsignaturasComponent,
    NavbarComponent,
    DetallesciclosComponent,
    ImagenesPipe,
    TextosupperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
