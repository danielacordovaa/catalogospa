import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CatalogoComponent, ProductoDetalleComponent],
  template: `
    <div class="app-container">
      <ng-container *ngIf="currentView === 'catalogo'">
        <app-catalogo (verDetalles)="mostrarDetalles($event)"></app-catalogo>
      </ng-container>
      <ng-container *ngIf="currentView === 'detalle'">
        <app-producto-detalle [id]="productoId" (regresar)="mostrarCatalogo()"></app-producto-detalle>
      </ng-container>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: string = 'catalogo';  // Indica qué vista se debe mostrar
  productoId: number = 0;

  mostrarDetalles(id: number) {
    this.productoId = id;  // Recibe el id y lo asigna
    this.currentView = 'detalle';  // Cambia a la vista de detalles
  }

  mostrarCatalogo() {
    this.currentView = 'catalogo';  // Regresa a la vista de catálogo
  }
}
