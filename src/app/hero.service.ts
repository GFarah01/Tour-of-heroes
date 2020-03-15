import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { tap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /**
   * Define the heroesUrl of the form :base/:collectionName 
   * with the address of the heroes resource on the server. 
   * Here base is the resource to which requests are made, 
   * and collectionName is the heroes data object in the in-memory-data-service.ts.
   */
  heroesURL = "api/heroesList";

  constructor(private httpClient: HttpClient) { }

  // Get List of heroes
  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesURL);
  }

  // Get hero by id
  getHeroById(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(this.heroesURL + "/" + id);
  }

  // Add hero
  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesURL, hero);
  }

  // Update hero
  UpdateHero(hero: Hero): Observable<any> {
    return this.httpClient.put<Hero>(this.heroesURL, hero);
  }

  // Delete hero
  deleteHero(id: number): Observable<Hero> {
    return this.httpClient.delete<Hero>(this.heroesURL + "/" + id);
  }

  // GET heroes whose name contains search term
  searchHeroes(term: string): Observable<Hero[]> {
    // The method returns immediately with an empty array if there is no search term
    if(!term.trim()) { 
      return of([]);
    }

    return this.httpClient.get<Hero[]>(this.heroesURL + "/?name=" + term)
    .pipe(
      tap(term => term.length ?
        console.log("Found heroes matching for this term: " + term) :
        console.log("No heroes matching for this term: " + term)
      )
    )
  }

}
