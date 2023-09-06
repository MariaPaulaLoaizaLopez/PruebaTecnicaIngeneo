import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeEntregaFormComponent } from './plan-de-entrega-form.component';

describe('PlanDeEntregaFormComponent', () => {
  let component: PlanDeEntregaFormComponent;
  let fixture: ComponentFixture<PlanDeEntregaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDeEntregaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeEntregaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
