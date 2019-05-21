import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoPage } from './trabajo.page';

describe('TrabajoPage', () => {
  let component: TrabajoPage;
  let fixture: ComponentFixture<TrabajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
