import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  textData: string = '';
  // tslint:disable-next-line:no-inferrable-types
  data: string =  '';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getTextData(data: string) {
    this.textData = data;
  }

  // tslint:disable-next-line:typedef
  getTextFromButton(data: string) {
    this.data = data;
  }

}
