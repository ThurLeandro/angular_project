import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayDataComponent } from './way-data.component';

describe('WayDataComponent', () => {
  let component: WayDataComponent;
  let fixture: ComponentFixture<WayDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WayDataComponent]
    });
    fixture = TestBed.createComponent(WayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
