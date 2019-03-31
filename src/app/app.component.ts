import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NgTippyService } from 'ng-tippy';
import { Options } from 'ng-tippy/lib/ng-tippy.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('test') test: ElementRef;
  // @ViewChild('test2') test: ElementRef;

  constructor(private ngTippy: NgTippyService) {}
  title = 'demo';
  config: Options = {
    content: 'This is some content!',
    theme: 'light',
    placement: 'right-end',
    multiple: true
  };

  config1: Options = {
    content: 'This is more content',
    theme: 'light',
    placement: 'left-start',
    multiple: true
  };

  ngOnInit() {
    const a = this.ngTippy.init(this.test, this.config);
    a.show(5000);
    const b = this.ngTippy.init(this.test, this.config1);
    b.show(5000);
  }
}
