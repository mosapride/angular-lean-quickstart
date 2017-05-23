import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  constructor() { }
  getHeros(): Promise<Hero[]> {
    return Promise.resolve(HEROES).catch(error => { throw error; });
  }

  getHeroseSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeros()), 200);
    });
  }
}
