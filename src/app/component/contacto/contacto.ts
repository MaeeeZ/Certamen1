import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  titulo: string = 'Información de Contacto';
  telefono: string = '+56 9 1234 5678';
  horarioAtencion: string = 'Lunes a Viernes de 09:00 a 18:00 hrs';
}