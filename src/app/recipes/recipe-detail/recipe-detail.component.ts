import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recepie.modal'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() detail:Recipe;

  constructor() { }

  ngOnInit() {
    console.log('this.detail');
    console.log(this.detail);
  }

}
