import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { CATEGORIES, PRODUCTS } from './data/products';
import { Category, Product } from './models/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories = CATEGORIES;
  allProducts = PRODUCTS;
  selectedCategoryId: number | null = null;

  get filteredProducts(): Product[] {
    return this.allProducts.filter((p) => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  // МІНЕ, ОСЫ ФУНКЦИЯ ТАУАРДЫ ӨШІРЕДІ:
  handleRemove(id: number) {
    // allProducts массивінен осы ID-і бар тауарды алып тастаймыз
    this.allProducts = this.allProducts.filter((p) => p.id !== id);
  }
}
