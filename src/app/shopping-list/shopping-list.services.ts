import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListServices
{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Mangoes',10),
      ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredients(ingredient:Ingredient)
    {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredient(ingredients:Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}