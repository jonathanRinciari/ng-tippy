import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TippyComponent } from './tippy.component';

describe('TippyComponent', () => {
  let component: TippyComponent;
  let fixture: ComponentFixture<TippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
