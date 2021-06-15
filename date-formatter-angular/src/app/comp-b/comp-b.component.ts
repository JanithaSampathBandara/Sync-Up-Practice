import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  formattedDate: Date;

  ngOnInit(): void {
    this.interactionService.source.subscribe((data: Date) => this.formattedDate = data);
  }

}
