import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;
  @Output('sendIngredient') sendIngredient: EventEmitter<{name: string, amount: number}> =
  new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {

    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.sendIngredient.emit({name, amount});

  }

}
