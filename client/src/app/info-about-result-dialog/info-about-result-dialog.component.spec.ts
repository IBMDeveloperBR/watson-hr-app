import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutResultDialogComponent } from './info-about-result-dialog.component';

describe('InfoAboutResultDialogComponent', () => {
  let component: InfoAboutResultDialogComponent;
  let fixture: ComponentFixture<InfoAboutResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAboutResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAboutResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
