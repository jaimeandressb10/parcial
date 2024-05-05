import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent
  },
  {
    path: 'home',
    component: PaginaPrincipalComponent
  },
  {
    path: 'detalle',
    component: MostrarProductosComponent
  },
  {
    path: 'detalle/:id', // Modificado para aceptar un parámetro de ID
    component: DetalleProductoComponent
  }
];
