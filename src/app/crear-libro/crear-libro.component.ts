import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Libro } from '../models/libro.model';
import { LibroService } from '../services/libros.service';
import { PrimengCommonModule } from '../primeng-common.module';

@Component({
  selector: 'app-crear-libro',
  standalone: true,
  imports: [ ReactiveFormsModule, PrimengCommonModule ],
  templateUrl: './crear-libro.component.html',
  styleUrl: './crear-libro.component.scss'
})
export class CrearLibroComponent implements OnInit {
  libroForm: FormGroup;
  libro: Libro = {} as Libro;

  constructor(private fb: FormBuilder, private libroService: LibroService) {
    this.libroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: [''],
      coleccion: [''],
      anho: [''],
      notas: [''],
      singladura: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.libroForm.valid) {
      // Asigna los valores del formulario al objeto libro
      this.libro = this.libroForm.value as Libro;

      // Lógica para guardar el libro utilizando el servicio
      this.libroService.crearLibro(this.libro).subscribe((nuevoLibro) => {
        console.log('Libro creado:', nuevoLibro);
        // Puedes redirigir o realizar otras acciones después de crear el libro
      });
    }
  }
}