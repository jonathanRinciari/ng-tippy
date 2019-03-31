import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTippyComponent } from './ng-tippy.component';

describe('NgTippyComponent', () => {
  let component: NgTippyComponent;
  let fixture: ComponentFixture<NgTippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTippyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
