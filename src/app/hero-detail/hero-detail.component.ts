import { YourNameService } from './../your-name.service';
import { Hero } from './../hero';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  name: string;

  @Input() hero: Hero;
  constructor(private yourNameService: YourNameService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change発生やで');
    // throw new Error('Method not implemented.');
    if (changes.hero.currentValue) {
      console.log(changes.hero.currentValue);
      // bindだから親も変わる
      changes.hero.currentValue.id += 10;
    } else {
      console.log('heroにはなにも入ってない');
    }
    this.name = this.yourNameService.getName();
  }

  ngOnInit() {
    console.log('hero-detail.component.ts - ngOnInit');
    this.name = this.yourNameService.getName();
  }
}
