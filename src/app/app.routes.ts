import { Routes } from '@angular/router';
import path from 'path';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';

export const routes: Routes = [
    {
        path: '',
        component: ListadoComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'nuevo-libro',
        component: CrearLibroComponent,
    }



];
