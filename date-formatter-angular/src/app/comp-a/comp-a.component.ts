import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any): void {
    console.log(formData.dateField);
    this.interactionService.setSubject(formData.dateField);
  }

}
