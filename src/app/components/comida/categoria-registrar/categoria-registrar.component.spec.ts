import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRegistrarComponent } from './categoria-registrar.component';

describe('CategoriaRegistrarComponent', () => {
  let component: CategoriaRegistrarComponent;
  let fixture: ComponentFixture<CategoriaRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
