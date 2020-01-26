import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
    elementRef.nativeElement.style.background = 'blue';
    elementRef.nativeElement.style.border = '1px solid white';
    elementRef.nativeElement.style.borderRadius = '5px';
    elementRef.nativeElement.style.color = 'white';
    elementRef.nativeElement.style.margin = '15px';
    elementRef.nativeElement.style.height = '30px';
   }



}
