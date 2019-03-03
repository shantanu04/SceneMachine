import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { User } from './user';
import { Scene } from './scene';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  usersUrl = 'http://localhost:8000/api/users';
  scenesUrl = 'http://localhost:8000/api/scenes?id=1&available=1';
  singleUserUrl = 'http://localhost:8000/api/users/1';
  singleSceneUrl = 'http://localhost:8000/api/scenes/';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  /* getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');  
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  } */

  getUsers(): Observable<User[]> {
    this.messageService.add('HeroService: fetched Users');
    let apiResult: Observable<User[]>
    apiResult = this.http.get<User[]>(this.usersUrl);
    return apiResult;
  }

  getUser(): Observable<User> {
    this.messageService.add('HeroService: fetched userdetails');
    return this.http.get<User>(this.singleUserUrl);
  }

  getScene(sceneId : number): Observable<Scene> {
    return this.http.get<Scene>(this.singleSceneUrl + sceneId);
  }

  getScenes(): Observable<Scene[]> {
    this.messageService.add('HeroService: fetched Scenes');
    return this.http.get<Scene[]>(this.scenesUrl);
  }
}