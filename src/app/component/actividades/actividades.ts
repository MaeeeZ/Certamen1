import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-actividades',
  styleUrl: './actividades.css',
  templateUrl: './actividades.html',
})
export class Actividades {

  mensaje: string = 'Actividades disponibles';

  talleres = [
    {
      nombre: 'Taller de Danza',
      descripcion: 'Aprende los fundamentos de la danza y folklore del pais.',
      horario: 'Lunes y Miércoles: 10:00 - 12:00'
    },
    {
      nombre: 'Taller de Futbol',
      descripcion: 'Aprende los fundamentos del futbol y estrategias de juego.',
      horario: 'Martes y Jueves: 14:00 - 16:00'
    },
    {
      nombre: 'Taller de basquetbol',
      descripcion: 'Aprende los fundamentos del basquetbol y estrategias de juego.',
      horario: 'Viernes: 09:00 - 13:00'
    },
    {
      nombre: 'Taller de Robótica',
      descripcion: 'Aprende los fundamentos de la robótica y programación de robots.',
      horario: 'Sábados: 10:00 - 13:00'
    }
  ];


}
