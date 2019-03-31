import { Injectable, ElementRef } from '@angular/core';
import tippy, { Options, Instance } from 'tippy.js';
@Injectable({
  providedIn: 'root'
})
export class NgTippyService {
  instance: Instance;
  constructor() { }

  init(element: ElementRef, options: Options) {
    this.instance = tippy(element.nativeElement, options) as Instance;
    return this.instance;
  }
}
