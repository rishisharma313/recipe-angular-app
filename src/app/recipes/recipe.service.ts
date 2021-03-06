

import { Recipe } from './recepie.modal';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('Recipe 1','a','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/goulash.jpg'),
        new Recipe('Recipe 2','a','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/goulash.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeDetail(index:number){
        return this.recipes[index];
    }

    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        //this.recipesChanged.next(this.recipes.slice());
    }

}