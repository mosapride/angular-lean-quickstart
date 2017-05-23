import { Injectable } from '@angular/core';

@Injectable()
export class YourNameService {
  name: string;
  constructor() {
    this.name = '名無し';
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

}
