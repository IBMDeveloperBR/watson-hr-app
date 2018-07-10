import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NluPageComponent } from './nlu-page.component';

describe('NluPageComponent', () => {
  let component: NluPageComponent;
  let fixture: ComponentFixture<NluPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NluPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NluPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
