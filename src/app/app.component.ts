import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { PrimengCommonModule } from './primeng-common.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, PrimengCommonModule, SidebarModule, MenubarModule, AutoCompleteModule]
})
export class AppComponent {

  showHead: boolean = false;

  constructor(private router: Router) {
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login') {
            this.showHead = false;
          } else {
            this.showHead = true;
          }
        }
      });
    }

  title = 'biblio-front';
  sidebarVisible: boolean = false;
  items: MenuItem[] = [
    {
      label: 'Mi cuenta',
      icon: 'bi bi-person-circle',
      items: [
        {
          label: 'Iniciar Sesion',
          icon: 'bi bi-box-arrow-in-right',
          routerLink: '/login'
        },
        {
          label: 'Registrarse',
          icon: 'bi bi-person-plus',
          routerLink: '/register'
        },
        {
          label: 'Cerrar Sesion',
          icon: 'bi bi-box-arrow-right',
          routerLink: '/logout'
        },
      ]
    },
    {
      label: 'Ajustes',
      icon: 'bi bi-gear',
      items: [
        {
          label: 'Permisos',
          icon: 'bi bi-person',
          routerLink: '/permissions'
        },
        {
          label: 'Copia de seguridad',
          icon: 'bi bi-arrow-counterclockwise',
        },
        {
          label: "Configuracion",
          icon: 'bi bi-gear',
        }
      ]
    },
    {
      label: 'Libros',
      icon: 'bi bi-book',
      items: [
        {
          label: 'Libros',
          icon: 'bi bi-book',
          routerLink: '/books'
        },
        {
          label: 'Autores',
          icon: 'bi bi-person',
          routerLink: '/authors'
        },
        {
          label: 'Editoriales',
          icon: 'bi bi-bookmark',
          routerLink: '/editorials'
        },
        {
          label: 'Colecciones',
          icon: 'bi bi-collection',
        },
        {
          label: 'Categorias',
          icon: 'bi bi-list',
          routerLink: '/categories'
        },
      ]
    },
    {
      label: 'Ver portadas',
      icon: 'bi bi-eye',
    },
    {
      label: 'Añadir libro',
      icon: 'bi bi-plus-lg',
      routerLink: '/nuevo-libro'
    }
  ];
  selectedItem: any = "aaaaaaaaaaa";
  suggestions: any[] = [];
  searchbuttonitems: MenuItem[] = [
    {
      label: 'Libros',
      icon: 'bi bi-book',
      routerLink: '/books'
    },
    {
      label: 'Autores',
      icon: 'bi bi-person',
      routerLink: '/authors'
    },
    {
      label: 'Editoriales',
      icon: 'bi bi-bookmark',
      routerLink: '/editorials'
    },
    {
      label: 'Colecciones',
      icon: 'bi bi-collection',
    },
    {
      label: 'Categorias',
      icon: 'bi bi-list',
      routerLink: '/categories'
    },
  ];

  search($event: AutoCompleteCompleteEvent) {
    throw new Error('Method not implemented.');
  }
}
