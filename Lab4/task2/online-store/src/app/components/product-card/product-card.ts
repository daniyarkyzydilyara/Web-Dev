import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex: number = 0;

  fullGallery: string[] = [];

  ngOnInit() {
    this.fullGallery = [this.product.image, ...this.product.images];
  }

  changeImage(index: number) {
    this.currentImageIndex = index;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.fullGallery.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.fullGallery.length) % this.fullGallery.length;
  }

  shareOnWhatsapp() {
    const message = encodeURIComponent(
      `Check out this product: ${this.product.name} - ${this.product.link}`,
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
