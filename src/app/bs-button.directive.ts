import { Renderer, ElementRef, Directive, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit{

  @Input() appBsButton;
  @Input() mouseDownClass;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    // const button = this.el.nativeElement as HTMLElement;
    // button.classList.add('btn');
    // button.classList.add('btn-primary');

    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton || 'primary'}`, true);
  }

  @HostListener('mousedown') onMousedown(ev) {
    // remove old element class
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, false);
    // add new element class
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, true);
  }

  @HostListener('mouseup', ['$event']) onMouseup(ev) {
    // remove old element class
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, false);
    // add new element class
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }

}
