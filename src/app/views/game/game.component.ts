import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  state = {
    players: [
      { name: "Moshe", "score": 10 }
    ] 
  }

  playerId(){ return 0 }
}
