import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {
  categorie: number = 0;

  constructor(private router: Router) { }

  goToAngular() {
    this.categorie = 1
    this.router.navigate(['/quiz', this.categorie]);
  }

  goToJavascirpt() {
    this.categorie = 2
    this.router.navigate(['/quiz', this.categorie]);
  }

  goToHtml() {
    this.categorie = 3
    this.router.navigate(['/quiz', this.categorie]);
  }

  goToCss() {
    this.categorie = 4
    this.router.navigate(['/quiz', this.categorie]);
  }

}
