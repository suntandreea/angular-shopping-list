import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // VARIANTA MEA SUPER COMPLICATA DEGEABA

  // @HostListener('click') toggle (eventData: Event) {
  //   if(!this.elRef.nativeElement.classList.contains('open')) {
  //     this.renderer.addClass(this.elRef.nativeElement,'open');
  //   }
  //   else {
  //     this.renderer.removeClass(this.elRef.nativeElement,'open');
  //   }
  // }
  // constructor (private elRef: ElementRef, private renderer: Renderer2) {}

  // VARIANTA SIMPLA
  // @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // VARIANTA CU CLICK ANYWHERE OUTSIDE
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
