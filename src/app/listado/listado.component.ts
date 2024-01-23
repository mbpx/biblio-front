import { Component, OnInit } from '@angular/core';
import { TableModule, TablePageEvent } from 'primeng/table';
import { PrimengCommonModule } from '../primeng-common.module';
import { LibroService } from '../services/libros.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [PrimengCommonModule, TableModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent implements OnInit {

  totalRecords: number = 0;
  initialRows: number = 10;

  constructor(
    private libroService: LibroService
  ) { }

  sizes = [
    { name: 'Small', class: 'p-datatable-sm' },
    { name: 'Normal', class: '' },
    { name: 'Large', class: 'p-datatable-lg' }
  ];
  selectedSize: any = '';

  libros: any[] = [];

  ngOnInit(): void {
    this.libroService.getAllActiveBooks(0, this.initialRows).subscribe({
      next: response => {
        this.libros = response.content;
        this.totalRecords = response.totalElements;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  onTablePageChange(event: TablePageEvent) {
    const page = event.first / event.rows;
    this.libroService.getAllActiveBooks(page, event.rows).subscribe({
      next: response => {
        this.libros = response.content;
        this.totalRecords = response.totalElements;
      },
      error: error => {
        console.error(error);
      }
    });
  }

}
