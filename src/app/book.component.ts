import { Component } from '@angular/core';
import { Book }    from './book';
@Component({
  selector: 'book-form',
  templateUrl: './book.component.html',
  styleUrls:['./form.css']
})
export class BookFormComponent {
  Types = ['Action', 'Drama',
            'Common', 'Commedy'];
  model = new Book(18, 'Hong', this.Types[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Book(42, '', '');
  }
}
