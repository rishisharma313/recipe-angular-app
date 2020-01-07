
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  formSE:NgForm
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngrediant = new Ingredient(value.name, value.amount);
    console.log(newIngrediant);
    this.shoppingListService.addIngredient(newIngrediant);

  }

  

}