import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { faqComponent } from './components/faq/faq.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceService } from './services/service.service'


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InformacionComponent,
    InicioComponent,
    CotizacionComponent,
    faqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,HttpClient,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
