import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  openModalById(id) {
    const modal = document.getElementById(id);
    if (modal) {

      modal.style.display = 'block';
      console.log('open modal' + modal);
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      console.warn(`can't find modal element by id`);
    }
  }

  hiddenModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }
}


