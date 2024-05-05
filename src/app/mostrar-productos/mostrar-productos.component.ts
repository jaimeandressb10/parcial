import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from "../barra-menu/barra-menu.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-mostrar-productos',
    standalone: true,
    templateUrl: './mostrar-productos.component.html',
    styleUrl: './mostrar-productos.component.css',
    imports: [RouterOutlet, BarraMenuComponent, FooterComponent, RouterLink]
})
export class MostrarProductosComponent {



}
