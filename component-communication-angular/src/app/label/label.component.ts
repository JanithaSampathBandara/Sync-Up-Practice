import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() outputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
