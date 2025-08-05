import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlumno } from './ver-alumno';

describe('VerAlumno', () => {
  let component: VerAlumno;
  let fixture: ComponentFixture<VerAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerAlumno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAlumno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
