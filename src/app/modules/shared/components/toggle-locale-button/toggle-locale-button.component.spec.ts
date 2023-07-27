import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLocaleButtonComponent } from './toggle-locale-button.component';

describe('ToggleLocaleButtonComponent', () => {
  let component: ToggleLocaleButtonComponent;
  let fixture: ComponentFixture<ToggleLocaleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleLocaleButtonComponent]
    });
    fixture = TestBed.createComponent(ToggleLocaleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
