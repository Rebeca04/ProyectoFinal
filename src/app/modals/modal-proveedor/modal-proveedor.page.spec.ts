import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProveedorPage } from './modal-proveedor.page';

describe('ModalProveedorPage', () => {
  let component: ModalProveedorPage;
  let fixture: ComponentFixture<ModalProveedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProveedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
