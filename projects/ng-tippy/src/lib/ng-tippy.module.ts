import { NgModule } from '@angular/core';
import { NgTippyComponent } from './ng-tippy.component';
import { TippysDirective } from './ng-tippy.directive';

@NgModule({
  declarations: [NgTippyComponent, TippysDirective],
  imports: [
  ],
  exports: [NgTippyComponent, TippysDirective]
})
export class NgTippyModule { }
