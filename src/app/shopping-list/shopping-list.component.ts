import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 2)
  ]

  constructor() { }

  addIngredient(ingredient: {name: string, amount: number}) {
    let newIgredient = new Ingredient(ingredient.name, ingredient.amount);
    this.ingredients.push(ingredient);



  }

  ngOnInit() {
  }

}
