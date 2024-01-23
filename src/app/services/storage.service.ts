import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Obtener un valor del sessionStorage
  get(key: string): any {
    const item = sessionStorage.getItem(key);
    console.log(item);
    if (item) {
      try {
        const value = JSON.parse(item);
        console.log(value);
        return value;
      } catch (error) {
        console.error('Error al analizar JSON en sessionStorage:', error);
        return null;
      }
    }
    return null;
  }

  // Establecer un valor en el sessionStorage
  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Eliminar un valor del sessionStorage
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Limpiar todo el sessionStorage
  clear(): void {
    sessionStorage.clear();
  }
}
