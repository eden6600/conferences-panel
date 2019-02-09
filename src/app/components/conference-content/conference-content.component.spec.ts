import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceContentComponent } from './conference-content.component';

describe('ConferenceContentComponent', () => {
  let component: ConferenceContentComponent;
  let fixture: ComponentFixture<ConferenceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
