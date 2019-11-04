import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text', async(() => {
    const spanList = fixture.debugElement.nativeElement.querySelectorAll('span');

    expect(spanList[0].textContent).toContain('VIDEO COURSE');
    expect(spanList[1].textContent).toContain('User login');
    expect(spanList[2].textContent).toContain('Log off');
  }));

});
