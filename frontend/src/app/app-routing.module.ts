import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
<<<<<<< HEAD
import { InformacionComponent } from './components/informacion/informacion.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'informacion', component: InformacionComponent }
=======
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: InicioComponent }
>>>>>>> feature/pestañaInicio-201503911
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
