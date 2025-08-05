import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTabla } from './curso-tabla';

describe('CursoTabla', () => {
  let component: CursoTabla;
  let fixture: ComponentFixture<CursoTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
