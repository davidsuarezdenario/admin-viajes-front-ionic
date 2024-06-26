import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem,IonSelect, IonSelectOption,IonList } from '@ionic/angular/standalone';
import { HeaderMainComponent } from "../../shared/components/header-main/header-main.component";
import { GlobalService } from "../../shared/services/global/global.service";

interface MarkupConfiguration {
  name: string;
  fields: string[]; // Lista de campos configurables
}
interface MarkupRecord {
  id: number;
  type: string;
  data: { [field: string]: any };
}

@Component({
  selector: 'app-markup',
  templateUrl: './markup.page.html',
  styleUrls: ['./markup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonSelect, IonSelectOption,IonList, CommonModule, FormsModule, HeaderMainComponent]
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

  exampleRecords: MarkupRecord[] = [
    {
      id: 1,
      type: 'vuelos',
      data: {
        'Aerolínea': 'Airline A',
        'País Destino': 'USA',
        'Ciudad Destino': 'New York',
        'País Origen': 'Mexico',
        'Ciudad Origen': 'Mexico City',
        'Fecha Ida': '2024-07-01',
        'Fecha Vuelta': '2024-07-15',
        'Rango Fechas': '',
        'Tarifa': '500'
      }
    },
    {
      id: 2,
      type: 'hoteles',
      data: {
        'País': 'Spain',
        'Ciudad': 'Madrid',
        'Categoría': '5 estrellas',
        'Rango Fechas': '2024-07-01 to 2024-07-10'
      }
    }
  ];

  constructor(public globalService: GlobalService) { }

  updateFields() {
    if (this.selectedMarkupType && this.configurations[this.selectedMarkupType]) {
      this.configurableFields = this.configurations[this.selectedMarkupType].fields;
      // Limpiar el formData
      this.formData = {};
    }
  }

  getObjectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.globalService.titleMain = 'Markup';
  }

  saveConfiguration() {
    // Crear un nuevo registro
    const newRecord: MarkupRecord = {
      id: this.exampleRecords.length + 1, // Asignar un ID único
      type: this.selectedMarkupType,
      data: { ...this.formData } // Copiar los datos del formulario
    };

    // Agregar el nuevo registro a la lista de registros
    this.exampleRecords.push(newRecord);

    // Limpiar el formulario y restablecer el tipo de markup seleccionado
    this.selectedMarkupType = '';
    this.configurableFields = [];
    this.formData = {};

    console.log('Datos del formulario guardados:', newRecord);
  }

}
