import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userDetails: User;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.heroService.getUser()
      .subscribe(userDetails => this.userDetails = userDetails["result"][0]);
  }

}
