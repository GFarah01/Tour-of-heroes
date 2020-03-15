import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  heroes: Hero[] = [];

  // Inject the HeroService
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
   }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroesList => {
      // heroesList.slice(1, 5) => Get the top 5 Heroes
      this.heroes = heroesList.slice(1, 5);
    })
  }

}
