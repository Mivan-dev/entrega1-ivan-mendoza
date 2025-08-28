import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPath } from './not-found-path';

describe('NotFoundPath', () => {
  let component: NotFoundPath;
  let fixture: ComponentFixture<NotFoundPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
