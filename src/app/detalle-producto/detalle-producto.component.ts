// detalle-producto.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class DetalleProductoComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.productoService.getProductById(productId).subscribe(data => {
      this.product = data;
    });
  }
}
