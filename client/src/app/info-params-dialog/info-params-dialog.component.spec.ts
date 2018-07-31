import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoParamsDialogComponent } from './info-params-dialog.component';

describe('InfoParamsDialogComponent', () => {
  let component: InfoParamsDialogComponent;
  let fixture: ComponentFixture<InfoParamsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoParamsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoParamsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
