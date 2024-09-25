import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdd';

  add(numbers: string):number {
    let nums = numbers.split(',');
    let sum = 0;
    nums.forEach(v => sum += parseInt(v));
    return sum;
  }
}
