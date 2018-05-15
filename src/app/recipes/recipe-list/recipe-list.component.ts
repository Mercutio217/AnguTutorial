import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Great Recipe', 'I dunno, but this is great',
    'https://s.hdnux.com/photos/66/62/62/14363832/3/920x920.jpg'),
    new Recipe('Another magnificent recipe!', 'Still great',
    'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Dog-bite-prevention.jpg?itok=3N2KTNkP')
  ];

  constructor() { }

  ngOnInit() {
  }

}
