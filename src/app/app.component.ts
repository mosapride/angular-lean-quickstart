import { YourNameService } from './your-name.service';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';
/*
const HEROES: Hero[] = [
  { id: 11, name: 'ベジータ' },
  { id: 12, name: '緋村剣心' },
  { id: 13, name: 'ガッツ' },
  { id: 14, name: 'ケンシロウ' },
  { id: 15, name: 'リヴァイ' },
  // 調子に乗りすぎて多すぎ。見にくい。
  //  { id: 16, name: 'エドワード・エルリック' },
  //  { id: 17, name: '空条承太郎' },
  //  { id: 18, name: '浦飯幽助' },
  //  { id: 19, name: 'ナツ・ドラグニル' },
  //  { id: 20, name: 'モンキー・D・ルフィ' },
  //  { id: 21, name: '黒崎一護' },
  //  { id: 22, name: 'アーカード' },
  //  { id: 23, name: 'うずまきナルト' },
  //  { id: 24, name: '孫悟空' }
];
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService, YourNameService]
})
export class AppComponent implements OnInit {

  title = 'ヒーローズツアー';
  heroes: Hero[];
  cssClass1 = 'myRed';
  cssClass2 = 'myPink';
  cssClass3 = 'myRed myPink';
  cssClassCheck: string;
  isChecked = false;
  selectedHero: Hero;
  name: string;
  wkName: string;
  constructor(private HeroService: HeroService, private yourNameService: YourNameService) { };

  ngOnInit(): void {
    this.getHeoros();
    this.name = this.yourNameService.getName();
    this.wkName = this.name;
  }

  onClickNameChange(wk: string): void {
    console.log('wk', wk);
    console.log('this.wkName', this.wkName);
    console.log('this.name', this.name);
    this.name = this.wkName;
    this.yourNameService.setName(this.name);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeoros(): void {
    // this.heros = this.HeroService.getHeros();
    // this.HeroService.getHeros().then(heros => this.heroes = heros);
    this.HeroService.getHeroseSlowly().then(heros => this.heroes = heros);
  }

  onChange(event: any) {
    // 非推奨：https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement
    // firefoxだと「ERROR TypeError: event.srcElement is undefined」が発生し動かなくなる。
    // console.log('check?', event.srcElement.checked);
    const target = event.target;
    const checked = target.checked;
    if (checked) {
      this.cssClassCheck = 'myRed myPink';
    } else {
      this.cssClassCheck = '';
    }
    console.log('checked', event.target.checked);
    console.log('target.value', event.target.value);
    this.isChecked = checked;
  }

  onObjectTest() {
    let noInitial: any;
    const nullObject: any = null;
    const undefineObject: any = undefined;
    const anyObject: any = new Object();
    console.log('noInitial typeof', typeof noInitial);
    console.log('noInitial', noInitial === null ? 'null' : 'not null');
    console.log('noInitial', noInitial === undefined ? 'undefined' : 'not undefined');
    console.log('noInitial', noInitial ? true : false);
    console.log('nullObject', nullObject ? true : false);
    console.log('undefineObject', undefineObject ? true : false);
    console.log('anyObject', anyObject ? true : false);
  }
}
