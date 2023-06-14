import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {
  modalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  openModal() {
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
  }
}
