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
  input: string = '';
  categories: { id: number, name: string }[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Html' },
    { id: 4, name: 'Css' }
  ];
  filteredCategories = this.categories;

  constructor(private router: Router) { }

  filterCategories() {
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(this.input.toLowerCase())
    );
  }

  goToCategory(id: number) {
    this.categorie = id;
    this.router.navigate(['/quiz', this.categorie]);
  }

  test() { }
}




