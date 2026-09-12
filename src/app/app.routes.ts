import { Routes } from '@angular/router';
import { Inicio } from './component/inicio/inicio';
import { Actividades } from './component/actividades/actividades';
import { Contacto } from './component/contacto/contacto';
import { Inscripcion } from './component/inscripcion/inscripcion';

export default [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'actividades', component: Actividades },
  { path: 'contacto', component: Contacto },
  { path: 'inscripcion', component: Inscripcion },
] as Routes;