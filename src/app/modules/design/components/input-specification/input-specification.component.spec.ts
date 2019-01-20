import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSpecificationComponent } from './input-specification.component';

describe('InputSpecificationComponent', () => {
  let component: InputSpecificationComponent;
  let fixture: ComponentFixture<InputSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
