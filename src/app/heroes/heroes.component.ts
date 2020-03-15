import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroSubscription: Subscription;
  heroes: Hero[];
  selectedHero: Hero;

  // Inject HeroService
  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    // Assign horesList to heroes
    this.heroSubscription = this.heroService.getHeroes().subscribe(heroesList => {
      this.heroes = heroesList;
    },
      error => {
        console.log(error);
      }
    );
  }

  // Add hero
  onAdd(name: string) {
    // Remove whitespace from both sides of a string
    name = name.trim();
    if (!name) { return; }

    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      }
    );  
  }

  // Delete hero
  onDelete(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      // Return an array of all the values in the heroes array that !== hero to delete:
      this.heroes = this.heroes.filter(h => h !== hero);
    })
  } 

  ngOnDestroy() {
    this.heroSubscription.unsubscribe();
  }
}
