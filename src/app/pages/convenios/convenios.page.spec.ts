import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConveniosPage } from './convenios.page';

describe('ConveniosPage', () => {
  let component: ConveniosPage;
  let fixture: ComponentFixture<ConveniosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
