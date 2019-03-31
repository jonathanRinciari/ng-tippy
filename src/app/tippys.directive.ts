import { Directive, ViewContainerRef, TemplateRef, Input, OnDestroy } from '@angular/core';
import tippy, { Options, Tippy, Instance } from 'tippy.js';
import { TippyOptions } from './tippy.model';

@Directive({
  selector: '[appTippys]'
})
export class TippysDirective implements OnDestroy {
  private _tippy: Instance;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }


  @Input()
  set appTippys(config: Options) {
    this._tippy = tippy(this.templateRef.elementRef.nativeElement.parentElement, config) as Instance;
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  ngOnDestroy() {
    this.viewContainer.clear();
  }


  
}
