import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  result: number;

  getBtnVal(data: number): void {
    console.log(data);
    this.result = data;
  }
}
