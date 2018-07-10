import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeParamsPersonalityPageComponent } from './change-params-personality-page.component';

describe('ChangeParamsPersonalityPageComponent', () => {
  let component: ChangeParamsPersonalityPageComponent;
  let fixture: ComponentFixture<ChangeParamsPersonalityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeParamsPersonalityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeParamsPersonalityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
