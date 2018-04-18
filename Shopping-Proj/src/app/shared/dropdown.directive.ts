import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // HostBinding
  @HostBinding('class.open') isOpen = false;

  // HostListener for click event
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
