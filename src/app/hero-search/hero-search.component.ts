import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private serachTerms = new Subject<string>();
  
  // Inject HeroService
  constructor(private heroService: HeroService) { }

  /**
   * A Subject is both a source of observable values and an Observable itself.
   * You can subscribe to a Subject as you would any Observable.
   * You can also push values into that Observable by calling its next(value) method
   * as the search() method does.
   * The event binding to the textbox's input event calls the onSearch() method.
   */
  onSearch(term: string) {
    this.serachTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.serachTerms.pipe(
      // Wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // Ensures that a request is sent only if the filter text changed
      distinctUntilChanged(),
      /**
       * switchMap() calls the search service for each search term that makes it through debounce()
       * and distinctUntilChanged(). 
       * It cancels and discards previous search observables, 
       * returning only the latest search service observable.
       */
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }

}
