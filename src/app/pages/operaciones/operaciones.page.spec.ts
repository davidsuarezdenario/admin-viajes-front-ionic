import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperacionesPage } from './operaciones.page';

describe('OperacionesPage', () => {
  let component: OperacionesPage;
  let fixture: ComponentFixture<OperacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
