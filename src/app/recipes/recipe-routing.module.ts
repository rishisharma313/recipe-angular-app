
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component'

const routes:Routes = [
    {path:'recipes', component:RecipesComponent, children:
        [ 
        {path:'add', component:RecipeAddComponent},
        {path:':id', component:RecipeDetailComponent},
        {path:':id/edit', component:RecipeAddComponent}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RecipeRoutingModule{}

