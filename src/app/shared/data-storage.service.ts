import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable({
    providedIn:"root"
})
export class DataStorageService{
    constructor(private http:HttpClient, private recipeService:RecipeService){  
    }
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://customerapp-399e0.firebaseio.com/recipes.json', recipes)
            .subscribe(response=>{
                //console.log(response);
            })
    }

    fetchRecipes(){
        this.http.get<any>('https://customerapp-399e0.firebaseio.com/recipes.json')
            .subscribe(response=>{
                //console.log(response);
                this.recipeService.setRecipes(response);
            })
    }
        

        
}