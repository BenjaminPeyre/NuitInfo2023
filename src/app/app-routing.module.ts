import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TetrisComponent } from './tetris/tetris.component';
import { CharlieComponent } from './charlie/charlie.component';
import { EggComponent } from './egg/egg.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tetris', component: TetrisComponent},
  { path: 'charlie', component: CharlieComponent},
  { path: 'egg', component: EggComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
