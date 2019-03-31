import { Directive, ViewContainerRef, TemplateRef, Input, OnDestroy } from '@angular/core';
import tippy, { Options, Instance } from 'tippy.js';

@Directive({
  selector: '[ngTippy]'
})
export class TippysDirective implements OnDestroy {
  private _tippy: Instance;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }


  @Input()
  set ngTippy(config: Options) {
    this._tippy = tippy(this.templateRef.elementRef.nativeElement.parentElement, config) as Instance;
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  ngOnDestroy() {
    this.viewContainer.clear();
  }
}
