import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeRandomComponent } from './joke-random/joke-random.component';

const routes: Routes = [
  {
    path: 'joke-random',
    component: JokeRandomComponent,
    data: {title: 'Random Joke'}
  },
  {
    path: '',
    redirectTo: '/joke-random',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
