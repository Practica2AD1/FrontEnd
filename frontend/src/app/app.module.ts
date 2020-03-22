import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
<<<<<<< HEAD
import { InformacionComponent } from './components/informacion/informacion.component';
=======
import { InicioComponent } from './components/inicio/inicio.component';
>>>>>>> feature/pestañaInicio-201503911

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
<<<<<<< HEAD
    InformacionComponent
=======
    InicioComponent
>>>>>>> feature/pestañaInicio-201503911
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
