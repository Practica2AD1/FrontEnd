import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';

import { InformacionComponent } from './components/informacion/informacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { faqComponent } from './components/faq/faq.component';
import { RespuestaforoComponent } from './components/Respuestas_foro/Respuestas_foro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'faq', component: faqComponent },
  {path: 'respuestaforo',component:RespuestaforoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
