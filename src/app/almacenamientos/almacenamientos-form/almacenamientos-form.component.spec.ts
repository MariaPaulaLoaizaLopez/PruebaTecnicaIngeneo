import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientosFormComponent } from './almacenamientos-form.component';

describe('AlmacenamientosFormComponent', () => {
  let component: AlmacenamientosFormComponent;
  let fixture: ComponentFixture<AlmacenamientosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenamientosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenamientosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
