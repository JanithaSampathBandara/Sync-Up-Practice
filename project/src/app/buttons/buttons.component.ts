import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output() value: EventEmitter<number> = new EventEmitter<number>();
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.result++;
    this.value.emit(this.result);
  }

  decrement(): void {
    this.result--;
    this.value.emit(this.result);
  }
}
