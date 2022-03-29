import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrinhosComponent } from './padrinhos.component';

describe('PadrinhosComponent', () => {
  let component: PadrinhosComponent;
  let fixture: ComponentFixture<PadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
