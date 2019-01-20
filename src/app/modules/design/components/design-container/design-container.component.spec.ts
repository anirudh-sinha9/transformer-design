import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignContainerComponent } from './design-container.component';

describe('DesignContainerComponent', () => {
  let component: DesignContainerComponent;
  let fixture: ComponentFixture<DesignContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
