import { Component } from '@angular/core';
import { Item } from './item/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;
  price: number = 0;

  items: Item[] = [
    { purchase: "Bread", done: false, price: 15.9 },
    { purchase: "Butter", done: false, price: 60 },
    { purchase: "Potater", done: true, price: 22.9 },
    { purchase: "Chees", done: false, price: 310 },
  ]
  addItem(text: string, price: number): void {
    if (text == null || text.trim() == '' || price == null) return;
    this.items.push(new Item(text, price));
  }
}
