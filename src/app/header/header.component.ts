
import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent implements OnInit{
    @Output() activeNavbar = new EventEmitter<string>();
    constructor(){}

    ngOnInit(){}

    onNavigationChanged(feature:string){
        this.activeNavbar.emit(feature);
    }

}