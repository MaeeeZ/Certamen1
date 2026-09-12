import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-inscripcion',
  styleUrl: './inscripcion.css',
  templateUrl: './inscripcion.html',
})
export class Inscripcion {

  formInscripcion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formInscripcion = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      carrera: ['', Validators.required],
      actividad: ['', Validators.required],
      jornada: ['', Validators.required]
    });
  }

  guardar() {
    if (this.formInscripcion.valid) {
      console.log('Datos:', this.formInscripcion.value);
      alert('Inscripción enviada con éxito');
    }
  }
  
}
