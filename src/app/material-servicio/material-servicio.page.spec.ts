import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialServicioPage } from './material-servicio.page';

describe('MaterialServicioPage', () => {
  let component: MaterialServicioPage;
  let fixture: ComponentFixture<MaterialServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialServicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
