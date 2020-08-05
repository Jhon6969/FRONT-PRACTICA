import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloActualizarComponent } from './platillo-actualizar.component';

describe('PlatilloActualizarComponent', () => {
  let component: PlatilloActualizarComponent;
  let fixture: ComponentFixture<PlatilloActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
