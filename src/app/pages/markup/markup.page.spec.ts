import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkupPage } from './markup.page';

describe('MarkupPage', () => {
  let component: MarkupPage;
  let fixture: ComponentFixture<MarkupPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkupPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update selectedMarkupType when ion-select changes', () => {
    const compiled = fixture.nativeElement;
    const ionSelect = compiled.querySelector('ion-select');

    // Simular un cambio de valor en el ion-select
    ionSelect.value = 'hoteles';
    ionSelect.dispatchEvent(new Event('ionChange'));

    fixture.detectChanges();

    // Verificar que selectedMarkupType se actualice correctamente
  });
});