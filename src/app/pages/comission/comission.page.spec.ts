import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComissionPage } from './comission.page';

describe('ComissionPage', () => {
  let component: ComissionPage;
  let fixture: ComponentFixture<ComissionPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComissionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ComissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update selectedComissionType when ion-select changes', () => {
    const compiled = fixture.nativeElement;
    const ionSelect = compiled.querySelector('ion-select');

    // Simular un cambio de valor en el ion-select
    ionSelect.value = 'hoteles';
    ionSelect.dispatchEvent(new Event('ionChange'));

    fixture.detectChanges();

    // Verificar que selectedComissionType se actualice correctamente
