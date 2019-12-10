import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recepieApp';
  loadedFeature = 'recipe';

  navigationSelected(feature:string){
    this.loadedFeature = feature;
  }
}
