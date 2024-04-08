import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Kimchi', 'Korean fermentation',
      'https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg',
      [
        new Ingredient('Nappa cabbage', 3),
        new Ingredient('Daikon', 1),
        new Ingredient('Carrot', 2)
      ]),

    new Recipe('Japche', 'Korean noodles',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg/220px-Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg',
      [
        new Ingredient('Glass Noodles', 1),
        new Ingredient('Carrot', 2),
        new Ingredient('Mushrooms', 5)
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // vrem sa returnam o copie, nu referinta catre obiectul original din store
  }

  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService){}
  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
