import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {
  title = 'parcial';
  existeProducto: boolean;
  listaProductos: Producto[] = [];
  constructor(private productoService: ProductoService) {
    this.existeProducto = true;
  }
  ngOnInit(): void {
    this.obtenerProducto();
  }
  obtenerProducto() {
    this.productoService.obtenerProductos().subscribe({
      next:(value:Producto[])=>{
        console.log(value);
        this.listaProductos = value;
      }
    });
  }
}
