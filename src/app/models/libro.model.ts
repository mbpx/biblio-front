export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  editorial: string;
  coleccion: string;
  anho: string;
  notas: string;
  singladura: string;
  createAt: Date;
  modifiedAt: Date;
  active: boolean;
  imagen: number;
  imagenUrl: string;
}
