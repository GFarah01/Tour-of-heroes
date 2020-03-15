import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroesList = [
      { id: 1, name: 'Wolverine' },
      { id: 2, name: 'Spiderman' },
      { id: 3, name: 'Thor' },
      { id: 4, name: 'Iron man' },
      { id: 5, name: 'The punisher' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Batman' },
      { id: 8, name: 'Dr Strange' },
      { id: 9, name: 'Deadpool' },
      { id: 10, name: 'Captain America' }
    ];
    return { heroesList };
  }
  
}
