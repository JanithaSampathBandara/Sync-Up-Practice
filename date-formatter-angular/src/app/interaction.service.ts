import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private subject = new Subject();
  source = this.subject.asObservable();

  constructor() { }

  setSubject(date: Date): void {
    this.subject.next(date);
  }
}
