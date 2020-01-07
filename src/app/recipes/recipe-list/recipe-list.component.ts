
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recepie.modal';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    @Output() selectedRecipe = new EventEmitter<Recipe>();
    
    recipes:Recipe[] = [];
  
    recipeSelected(recipe:Recipe){
      this.selectedRecipe.emit(recipe);
    }
    constructor(private recipeService:RecipeService) { }

    ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
    }

}