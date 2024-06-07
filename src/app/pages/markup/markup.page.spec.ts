import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkupPage } from './markup.page';

describe('MarkupPage', () => {
  let component: MarkupPage;
  let fixture: ComponentFixture<MarkupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
