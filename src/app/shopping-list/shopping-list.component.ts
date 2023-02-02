import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list.services';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListServices) 
  {

  }

  ngOnInit(): void 
  {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
}
