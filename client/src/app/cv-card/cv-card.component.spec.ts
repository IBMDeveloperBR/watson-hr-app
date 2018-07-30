import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardComponent } from './cv-card.component';

describe('CvCardComponent', () => {
  let component: CvCardComponent;
  let fixture: ComponentFixture<CvCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
