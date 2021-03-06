import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() {}
  @HostBinding('class.open') open = false;
  @HostListener('click') toggleNav(event: Event) {
    this.open = !this.open;
  };

}
