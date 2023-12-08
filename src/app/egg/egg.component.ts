import { Component } from '@angular/core';

@Component({
  selector: 'app-egg',
  templateUrl: './egg.component.html',
  styleUrls: ['./egg.component.scss']
})
export class EggComponent {
  binArray: number[] = Array(0);

  constructor() {
    document.addEventListener("keydown", (event) => {
      if (event.key == "t") {
        this.binArray.push(this.binArray.length + 1);
      }
    });
  }
}
