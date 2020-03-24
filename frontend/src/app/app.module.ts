import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InformacionComponent,
    InicioComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
