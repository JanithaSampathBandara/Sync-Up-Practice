import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Output() fieldText: EventEmitter<string> = new EventEmitter<string>();
  // tslint:disable-next-line:no-inferrable-types
  inputText: string = '';



  constructor() { }

  ngOnInit(): void {
  }

  getText(): void {
    this.fieldText.emit(this.inputText);
  }
}
