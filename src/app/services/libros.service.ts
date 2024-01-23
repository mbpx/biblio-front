import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Libro } from '../models/libro.model';
import { PageableResponse } from '../models/pageable.response';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private endpoint = '/libros'; // Cambia el endpoint según tu configuración

  constructor(private http: HttpService) {}

  getAllActiveBooks(page: number, size: number): Observable<PageableResponse<Libro>> {
    const params = `page=${page}&size=${size}`;
    return this.http.get<PageableResponse<Libro>>(`${this.endpoint}/todos?${params}`);
  }

  getBooksByTitulo(titulo: string, page: number, size: number): Observable<PageableResponse<Libro>> {
    const params = `page=${page}&size=${size}`;
    return this.http.get<PageableResponse<Libro>>(`${this.endpoint}/porTitulo/${titulo}?${params}`);
  }

  // Agrega métodos para los otros endpoints según sea necesario

  crearLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.endpoint}/crear`, libro);
  }

  obtenerLibroPorId(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.endpoint}/${id}`);
  }

  actualizarLibro(id: number, libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.endpoint}/${id}`, libro);
  }

  eliminarLibro(id: number): Observable<void> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
