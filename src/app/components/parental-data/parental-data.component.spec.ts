import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalDataComponent } from './parental-data.component';

describe('ParentalDataComponent', () => {
  let component: ParentalDataComponent;
  let fixture: ComponentFixture<ParentalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentalDataComponent]
    });
    fixture = TestBed.createComponent(ParentalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
