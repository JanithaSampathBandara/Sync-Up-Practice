import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  public appText: any;

  sendingText = '';

  constructor() {
    this.appText = '';
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  sendText() {
    this.sendingText = this.appText;
  }
}
