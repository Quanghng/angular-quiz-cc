import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../shared/services/categorie.service';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {
  categorie: number = 0;
  input: string = '';
  filteredCategories: { id: number; name: string }[] = [];

  constructor(private router: Router, private categorieService: CategorieService, private quizService: QuizService) {
    this.filteredCategories = this.categorieService.getCategories();
    this.quizService.resetQuiz();
  }

  filterCategories() {
    this.filteredCategories = this.categorieService.filterCategories(this.input);
  }

  goToCategory(id: number) {
    this.categorie = id;
    this.router.navigate(['/quiz', this.categorie]);
  }

  clearSearch() {
    this.input = '';
    this.filteredCategories = this.categorieService.getCategories();
  }
}