import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit() {}
  hideModal(e) {
    if (e.target.className === 'backdrop') {
      this.elementRef.nativeElement.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    } else if (e.target.className === 'backdrop-close'){
        document.getElementById('backdrop').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflow = 'scroll';


    }
  }
}
