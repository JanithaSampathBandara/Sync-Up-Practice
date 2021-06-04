import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  // @Input() fromHome: string = '';
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  textFieldData = '';
  constructor() { }

  ngOnInit(): void {
    // this.notify.emit(this.textFieldData);
  }

  change(): void {
    // console.log('press');
    this.notify.emit(this.textFieldData);
  }
}
