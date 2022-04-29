import { Component } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';
  isSolved = false;

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;

    if (this.enteredText === this.randomText) {
      this.isSolved = true;
    }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
