import { Component, OnInit } from '@angular/core';
import { JokeService, Joke } from '../joke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joke-random',
  templateUrl: './joke-random.component.html',
  styleUrls: ['./joke-random.component.scss']
})
export class JokeRandomComponent implements OnInit {
  jokes: Joke[] = [];
  hideIt = true;
  toggleDisplayName = "Reveal Punchline";
  altDisplayName = "Hide Punchline";

  constructor(
    public rest: JokeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRandomJoke();
  }

  getRandomJoke(): void {
    this.hideIt = true;
    this.toggleDisplayName = "Reveal Punchline";
    this.altDisplayName = "Hide Punchline";
    this.rest.getRandomJoke().subscribe((resp: any) => {
      this.jokes = resp;
      console.log(this.jokes);
    });
  }

  togglePunchline(): void {
    let tempDisplayName = this.toggleDisplayName;
    this.toggleDisplayName = this.altDisplayName;
    this.altDisplayName = tempDisplayName;
    this.hideIt = !this.hideIt;

  }


}
