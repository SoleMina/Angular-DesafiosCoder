import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaInscripcionComponent } from './alta-inscripcion.component';

describe('AltaInscripcionComponent', () => {
  let component: AltaInscripcionComponent;
  let fixture: ComponentFixture<AltaInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
