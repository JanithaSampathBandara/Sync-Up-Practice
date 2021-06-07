import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  textFieldValue: string = '';
  // tslint:disable-next-line:no-inferrable-types
  toLabel: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getText(data: any): void {
    this.textFieldValue = data;
  }

  btnClicked(): void {
    this.toLabel = this.textFieldValue;
  }

}
