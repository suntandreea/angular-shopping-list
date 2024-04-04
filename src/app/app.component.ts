import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-shopping-list';
  selectedNavigation: string = 'shopping-list';

  onSelectFeature(feature: string) {
    this.selectedNavigation = feature;
  }
}
