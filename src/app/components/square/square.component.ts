import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() color: string = 'grey';
  @Input() text: 'X' | 'O' | '' = '';
  @Input() num: number | undefined;
  @Input() value: boolean = false;
  @Output() onClickSquare = new EventEmitter();
  constructor() {}

  onClick() {
    this.onClickSquare.emit();
  }
}
