import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  currentImageIndex = 0;

  // КЕШІР, ОСЫ ФУНКЦИЯЛАРДЫ ҚОСУДЫ ҰМЫТПА:
  nextImage() {
    const images = this.product().images;
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
  }

  prevImage() {
    const images = this.product().images;
    this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
  }

  like() {
    // Тапсырма бойынша: әр басқан сайын 1-ге артады
    this.product().likes++;
  }

  deleteProduct() {
    // Ата-анаға (ProductList) өшіру керек екенін айтамыз
    this.remove.emit(this.product().id);
  }

  shareOnWhatsapp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product().name + ' ' + this.product().link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}
