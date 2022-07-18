import { Component, OnInit } from '@angular/core';
import { Numtype } from 'num-type';
import { NUMBER } from 'numbering';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: Numtype[] = NUMBER;
  text: string = '';
  xIsNext: boolean = true;
  xSelect: number[] = [];
  oSelect: number[] = [];
  winner: string = 'X turn';
  lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  constructor() {}
  ngOnInit(): void {}
  refresh() {
    this.board = NUMBER;
    this.text = '';
    this.xIsNext = true;
    this.xSelect = [];
    this.oSelect = [];
    this.winner = 'X turn';
    for (var i = 0; i < this.board.length; i++) {
      this.board[i].isClicked = false;
      this.board[i].color = 'grey';
      this.board[i].value = '';
    }
  }
  calcWinner(input: number[]): boolean {
    for (var i = 0; i < this.lines.length; i++) {
      var flag: number[] = [1, 1, 1];
      var c = 0;
      for (var j = 0; j < this.lines[i].length; j++) {
        for (var k = 0; k < input.length; k++) {
          if (this.lines[i][j] === input[k]) {
            flag[c++] = 0;
            break;
          }
        }
      }
      if (flag[0] === 0 && flag[1] === 0 && flag[2] === 0) {
        return true;
      }
    }
    return false;
  }

  endGame() {
    for (var i = 0; i < this.board.length; i++) {
      this.board[i].isClicked = true;
    }
  }

  x() {
    var xpermutes = false;
    if (this.xSelect.length > 2) {
      xpermutes = this.calcWinner(this.xSelect);
    }
    if (xpermutes) {
      this.endGame();
      this.winner = 'X Won';
    } else {
      this.xIsNext = !this.xIsNext;
      this.winner = 'O turn';
    }
  }

  o() {
    var opermutes = false;
    if (this.oSelect.length > 2) {
      opermutes = this.calcWinner(this.oSelect);
    }
    if (opermutes) {
      this.endGame();
      this.winner = 'O Won';
    } else {
      this.xIsNext = !this.xIsNext;
      this.winner = 'X turn';
    }
  }

  changeText(num: number) {
    this.board[num].isClicked = true;
    if (this.xIsNext) {
      this.xSelect.push(num);
      this.board[num].color = 'red';
      this.board[num].value = 'X';
      this.x();
    } else {
      this.oSelect.push(num);
      this.board[num].color = 'green';
      this.board[num].value = 'O';
      this.o();
    }
  }
}
