import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosDeTransporteFormComponent } from './medios-de-transporte-form.component';

describe('MediosDeTransporteFormComponent', () => {
  let component: MediosDeTransporteFormComponent;
  let fixture: ComponentFixture<MediosDeTransporteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediosDeTransporteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosDeTransporteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
