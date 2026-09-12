import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './component/inicio/inicio';
import { Cabecera } from './component/cabecera/cabecera';
import { Menu } from './component/menu/menu';
import { Contacto } from './component/contacto/contacto';
import { Inscripcion } from './component/inscripcion/inscripcion';

@Component({
  imports: [RouterOutlet, Inicio, Cabecera, Menu, Contacto, Inscripcion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Certamen');
}
