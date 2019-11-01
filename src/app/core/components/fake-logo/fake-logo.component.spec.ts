import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogoComponent } from './fake-logo.component';

describe('FakeLogoComponent', () => {
  let component: FakeLogoComponent;
  let fixture: ComponentFixture<FakeLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
