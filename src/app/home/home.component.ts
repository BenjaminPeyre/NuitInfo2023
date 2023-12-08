import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private konamiCodeSequence: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  private inputSequence: number[] = [];

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    this.inputSequence.push(event.keyCode);

    if (this.inputSequence.length > this.konamiCodeSequence.length) {
      this.inputSequence.shift();
    }

    if (this.inputSequence.toString() === this.konamiCodeSequence.toString()) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  }
}
