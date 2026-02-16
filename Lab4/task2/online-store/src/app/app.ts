import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list'; // Жолды тексер

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.html', // Егер файлың 'app.html' болса, осылай қалдыр
  styleUrl: './app.css', // Егер файлың 'app.css' болса
})
export class AppComponent {
  // 'App' емес, 'AppComponent' қылғаның дұрыс
  title = signal('Kaspi Store');
}
