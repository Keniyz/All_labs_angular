import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[positivenumbers]'
})
export class NumbersDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  @HostListener('input', ['$event'])
    onInputChange(event: any): any {
      const initalValue = this.elementRef.nativeElement.value;
      this.elementRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
      if (initalValue !== this.elementRef.nativeElement.value) {
        event.stopPropagation();
      }
    }

}
