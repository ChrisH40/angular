// Progamattically Implementing Dynamic Alert Component
import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
  // -----------