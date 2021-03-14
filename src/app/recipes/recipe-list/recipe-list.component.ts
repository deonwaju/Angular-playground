import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Just a test',
      'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/1/0-514-361/chinese-new-year-recipes-food-t.jpg'),
    new Recipe('A test recipe', 'Just a test',
      'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/1/0-514-361/chinese-new-year-recipes-food-t.jpg'),
    new Recipe('A test recipe', 'Just a test',
      'https://www.hellomagazine.com/imagenes/cuisine/20210211106682/easy-chinese-new-year-recipes/1/0-514-361/chinese-new-year-recipes-food-t.jpg'),



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
