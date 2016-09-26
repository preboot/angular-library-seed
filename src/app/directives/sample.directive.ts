import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[mySample]'
})
export class SampleDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementAttribute(el.nativeElement, 'class', 'sample-class');
  }
}
