import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitindoEComponent } from './emitindo-e.component';

describe('EmitindoEComponent', () => {
  let component: EmitindoEComponent;
  let fixture: ComponentFixture<EmitindoEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitindoEComponent]
    });
    fixture = TestBed.createComponent(EmitindoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
