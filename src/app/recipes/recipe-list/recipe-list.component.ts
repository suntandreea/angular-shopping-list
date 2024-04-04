import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Kimchi', 'Korean fermentation', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg'),
    new Recipe('Japche', 'Korean noodles', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg/220px-Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeEvent.emit(recipe);
  }
}
