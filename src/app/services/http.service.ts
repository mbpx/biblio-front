import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:8080/api/v1'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient,
    private storage: StorageService) {}

  private getHeaders(): HttpHeaders {
    
    const token = this.storage.get('currentUser').token;
    console.log(token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    });
    console.log(headers);
    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Error del cliente:', error.error.message);
    } else {
      console.error(`Código de error ${error.status}, ` + `body: ${error.error}`);
    }
    return throwError('Algo salió mal; por favor, inténtalo de nuevo más tarde.');
  }

  get<T>(url: string): Observable<T> {
    const headers = this.getHeaders();
    console.log("HEAD", headers);
    return this.http.get<T>(`${this.apiUrl}${url}`, { headers: headers }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, data, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, data, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  delete(url: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${url}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
}
