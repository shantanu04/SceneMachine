import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Scene } from '../scene';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() scene: Scene;
  // @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getScene();
  }

  /* getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  } */

  getScene(): void {
    const sceneId = +this.route.snapshot.paramMap.get('idScene');
    this.heroService.getScene(sceneId)
      .subscribe(scene => this.scene = scene["result"][0]);
  }

  goBack(): void {
    this.location.back();
  }
}