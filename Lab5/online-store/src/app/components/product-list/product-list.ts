import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="grid">
      @for (prod of products(); track prod.id) {
        <app-product-item [product]="prod" (remove)="onRemove($event)"></app-product-item>
      } @empty {
        <p>No products in this category.</p>
      }
    </div>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
  `,
})
export class ProductListComponent {
  products = input.required<Product[]>();
  removeProduct = output<number>(); // Ата-анаға жіберу үшін жаңа оқиға

  onRemove(id: number) {
    this.removeProduct.emit(id); // ID-ді AppComponent-ке аттандырамыз
  }
}
