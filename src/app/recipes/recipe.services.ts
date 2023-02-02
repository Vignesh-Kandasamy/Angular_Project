import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListServices } from "../shopping-list/shopping-list.services";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected =new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe('Briyani',
        'It is very Spicy',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/',
        [
            new Ingredient('Meat',2),
            new Ingredient('French fries',20)
        ]),
        new Recipe('Dhosa',
        'It is very Spicy',
        'https://www.kindpng.com/picc/m/333-3335751_dosa-hd-png-download.png',
        [
            new Ingredient('Bun',12),
            new Ingredient('Fries',10)
        ]),
        new Recipe('Poori',
        'It is very Spicy',
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/',
        [
            new Ingredient('Meat',6),
            new Ingredient('French fries',2)
        ])
    
      ];
      constructor(private shoppingListService:ShoppingListServices){}
      getRecipes()
      {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[])
      {
        this.shoppingListService.addIngredient(ingredients);
      }
}