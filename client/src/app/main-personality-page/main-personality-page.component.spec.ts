import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPersonalityPageComponent } from './main-personality-page.component';

describe('MainPersonalityPageComponent', () => {
  let component: MainPersonalityPageComponent;
  let fixture: ComponentFixture<MainPersonalityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPersonalityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPersonalityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
