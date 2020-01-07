
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  id:number;
  editMode:boolean

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      
      console.log(params['id']);
      this.editMode = params['id'] != null
      console.log(this.editMode);

    })
  }

}
