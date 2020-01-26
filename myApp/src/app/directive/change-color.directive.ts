import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }


  /* @HostBinding('style.color') border: string; */

  changeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  @HostListener('click') onHover() {
    this.changeBgColor('blue');
  }

  @HostListener('mouseleave') onMouseleave() {
    this.changeBgColor('orange');
    /* this.border = '1px solid green'; */
  }

}
