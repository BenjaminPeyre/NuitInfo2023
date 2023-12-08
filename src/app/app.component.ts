import { Component } from '@angular/core';
import { AngularTetrisComponent } from './containers/angular-tetris/angular-tetris.component';

@Component({
  standalone: true,
  selector: 'app-root', //eslint-disable-line
  imports: [AngularTetrisComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
