import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  /**
   * The hero property must be an Input property, 
   * annotated with the @Input() decorator, 
   * because the external HeroesComponent will bind to it like this.
   */
  id: number;
  hero: Hero;
  heroSubscription: Subscription;

  /**
   * - The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
   * This component is interested in the route's parameters extracted from the URL. 
   * The "id" parameter is the id of the hero to display.
   * 
   * - The location is an Angular service for interacting with the browse
   */ 
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    // Extract the id route parameter
    this.heroSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      // console.log(this.id)
    })

    // Get the Hero by id
    this.heroService.getHeroById(this.id).subscribe(hero => {
      this.hero = hero;
      // console.log(hero)
    })
  } 

  onSave() {
    this.heroService.UpdateHero(this.hero).subscribe(() => {
      this.router.navigate(['/dashboard'])
    });
  }
}   
