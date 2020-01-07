
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent implements OnInit{
    @Output() activeNavbar = new EventEmitter<string>();
    constructor(private dataStorageService:DataStorageService){}

    ngOnInit(){}

    onNavigationChanged(feature:string){
        this.activeNavbar.emit(feature);
    }

    storeRecipes(){
        this.dataStorageService.storeRecipes();
    }
    fetchRecipes(){
        this.dataStorageService.fetchRecipes();
    }

}