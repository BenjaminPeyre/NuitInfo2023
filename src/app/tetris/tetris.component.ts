import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent {
  board: boolean[][] = [];
  ngOnInit() {
    this.initBoard();
  }

  private initBoard(): void {
    for (let i = 0; i < 20; i++) {
      this.board.push(Array(10).fill(false));
    }
  }
} 
