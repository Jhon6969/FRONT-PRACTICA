import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloRegistrarComponent } from './platillo-registrar.component';

describe('PlatilloRegistrarComponent', () => {
  let component: PlatilloRegistrarComponent;
  let fixture: ComponentFixture<PlatilloRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
