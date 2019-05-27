import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrabajoPage } from './modal-trabajo.page';

describe('ModalTrabajoPage', () => {
  let component: ModalTrabajoPage;
  let fixture: ComponentFixture<ModalTrabajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTrabajoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
