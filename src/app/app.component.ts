import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdd';

  add(numbers: string):number {
    let nums = numbers.split(/[,\s;:\/\na-zA-Z]+/);
    let sum = 0;
    let negativeNums: number[] = []
    nums.forEach(v => {
      if (!v) return;
      let val = parseInt(v);
      if(val < 0) negativeNums.push(val);
      sum += val;
    });
    if (negativeNums.length > 0) {
      throw new Error('negative numbers not allowed ' + negativeNums.join(','));
    }
    return sum;
  }
}
