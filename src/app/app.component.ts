import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ヒーローズツアー';
  heros = HEROES;
  hoge1 = 'dummy1';
  hoge2 = 'dummy2';

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
