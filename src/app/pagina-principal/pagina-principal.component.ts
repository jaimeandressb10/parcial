import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from "../barra-menu/barra-menu.component";
import { ContenidoComponent } from "../contenido/contenido.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-pagina-principal',
    standalone: true,
    templateUrl: './pagina-principal.component.html',
    styleUrl: './pagina-principal.component.css',
    imports: [RouterOutlet, BarraMenuComponent, ContenidoComponent, FooterComponent]
})
export class PaginaPrincipalComponent {

}
