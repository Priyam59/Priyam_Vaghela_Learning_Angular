import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('blur') onBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    }
}
