import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { User } from '../user';
import { Scene } from '../scene';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  user: User;
  sceneList: Scene[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.getHeroes();
    this.getUser();
    this.getScenes();
  }

  /* getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  } */

  getUser(): void {
    this.heroService.getUser()
      .subscribe(user => this.user = user["result"][0]);
  }

  getScenes(): void {
    this.heroService.getScenes()
      .subscribe(sceneList => this.sceneList = sceneList["result"]);
  }

}
