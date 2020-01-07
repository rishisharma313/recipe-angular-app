import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recepie.modal';
import {ActivatedRoute, Params} from '@angular/router';
import { RecipeService} from '../recipe.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  //@Input() detail:Recipe;
  //detail:Recipe;
  id:number; 
  constructor(private route:ActivatedRoute, private recipeService:RecipeService) { }

  ngOnInit() {
   // console.log('this.detail');
   // console.log(this.detail);
   const id = this.route.snapshot.params['id'];

   this.route.params.subscribe((params:Params)=>{
    this.id = +params['id']
    
    //this.detail = this.recipeService.getRecipeDetail(this.id);
    //console.log(this.detail);
   })

  }

}
