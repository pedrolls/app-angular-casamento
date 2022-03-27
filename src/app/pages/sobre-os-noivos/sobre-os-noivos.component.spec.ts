import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOsNoivosComponent } from './sobre-os-noivos.component';

describe('SobreOsNoivosComponent', () => {
  let component: SobreOsNoivosComponent;
  let fixture: ComponentFixture<SobreOsNoivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreOsNoivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreOsNoivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
