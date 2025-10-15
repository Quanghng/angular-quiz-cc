import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categories = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Html' },
    { id: 4, name: 'Css' }
  ];

  getCategories() {
    return this.categories;
  }

  filterCategories(input: string) {
    return this.categories.filter(category =>
      category.name.toLowerCase().includes(input.toLowerCase())
    );
  }
}