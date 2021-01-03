import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexInputsComponent } from './flex-inputs.component';

describe('FlexInputsComponent', () => {
  let component: FlexInputsComponent;
  let fixture: ComponentFixture<FlexInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlexInputsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
