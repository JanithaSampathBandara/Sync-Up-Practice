import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() data: string = '';
  // tslint:disable-next-line:no-inferrable-types
  @Output() sendText: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendData(): void {
    console.log('button');
    this.sendText.emit(this.data);
  }

}
