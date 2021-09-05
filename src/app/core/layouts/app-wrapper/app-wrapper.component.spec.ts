import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppWrapperComponent } from './app-wrapper.component';

describe('AppWrapperComponent', () => {
  let component: AppWrapperComponent;
  let fixture: ComponentFixture<AppWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppWrapperComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
