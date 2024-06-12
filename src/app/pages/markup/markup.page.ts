import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem,IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { HeaderMainComponent } from "../../shared/components/header-main/header-main.component";
import { GlobalService } from "../../shared/services/global/global.service";

interface MarkupConfiguration {
  name: string;
  fields: string[]; // Lista de campos configurables
}

@Component({
  selector: 'app-markup',
  templateUrl: './markup.page.html',
  styleUrls: ['./markup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem,IonSelect, IonSelectOption, CommonModule, FormsModule, HeaderMainComponent ]
})
export class MarkupPage implements OnInit {

  selectedMarkupType: string = ''; // Asigna un valor inicial aquí
  configurableFields: string[] = [];
  formData: { [field: string]: any } = {};

  private configurations: { [markupType: string]: MarkupConfiguration } = {
    'vuelos': {
      name: 'Vuelos',
      fields: ['Aerolínea', 'País Destino', 'Ciudad Destino', 'País Origen', 'Ciudad Origen', 'Fecha Ida', 'Fecha Vuelta', 'Rango Fechas', 'Tarifa']
    },
    'hoteles': {
      name: 'Hoteles',
      fields: ['País', 'Ciudad', 'Categoría', 'Rango Fechas']
    }
  };
  constructor(
    public globalService: GlobalService
  ) { }

  updateFields() {
    this.configurableFields = this.configurations[this.selectedMarkupType].fields;
    // Limpiar el formData
    this.formData = {};
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.globalService.titleMain = 'Markup';
  }

  saveConfiguration() {
    // Aquí puedes hacer lo que quieras con los datos del formulario
    console.log('Datos del formulario:', this.formData);
  }

}
