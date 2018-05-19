import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent {
  title : String = "I am another stupid app...";
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);

  }
}
