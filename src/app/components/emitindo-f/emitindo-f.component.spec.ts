import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitindoFComponent } from './emitindo-f.component';

describe('EmitindoFComponent', () => {
  let component: EmitindoFComponent;
  let fixture: ComponentFixture<EmitindoFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitindoFComponent]
    });
    fixture = TestBed.createComponent(EmitindoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
