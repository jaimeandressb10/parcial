import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from "./contenido/contenido.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BarraMenuComponent, FooterComponent, ContenidoComponent]
})
export class AppComponent {
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
