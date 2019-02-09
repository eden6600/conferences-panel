import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSelectComponent } from './conference-select.component';

describe('ConferenceSelectComponent', () => {
  let component: ConferenceSelectComponent;
  let fixture: ComponentFixture<ConferenceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
