import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() color: string = 'grey';
  @Input() text: 'X' | 'O' | '' = '';
  @Input() num: number | undefined;
  @Input() value: boolean = false;
  @Output() onClickSquare = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.onClickSquare.emit();
  }
}
