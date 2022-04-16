import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTablaComponent } from './edit-tabla.component';

describe('EditTablaComponent', () => {
  let component: EditTablaComponent;
  let fixture: ComponentFixture<EditTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
