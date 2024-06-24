import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem,IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { HeaderMainComponent } from "../../shared/components/header-main/header-main.component";
import { GlobalService } from "../../shared/services/global/global.service";

interface ComissionConfiguration {
  name: string;
  fields: string[]; // Lista de campos configurables
}

@Component({
  selector: 'app-comission',
  templateUrl: './comission.page.html',
  styleUrls: ['./comission.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem,IonSelect, IonSelectOption, CommonModule, FormsModule, HeaderMainComponent ]
})
export class ComissionPage implements OnInit {

  selectedComissionType: string = ''; // Asigna un valor inicial aquí
  configurableFields: string[] = [];
  formData: { [field: string]: any } = {};

  private configurations: { [comissionType: string]: ComissionConfiguration } = {
    'hoteles': {
      name: 'Hoteles',
      fields: ['País', 'Ciudad', 'Categoría', 'Rango Fechas']
    }
  };
  constructor(
    public globalService: GlobalService
  ) { }

  updateFields() {
    this.configurableFields = this.configurations[this.selectedComissionType].fields;
    // Limpiar el formData
    this.formData = {};
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.globalService.titleMain = 'Comission';
  }

  saveConfiguration() {
    // Aquí puedes hacer lo que quieras con los datos del formulario
    console.log('Datos del formulario:', this.formData);
  }

}
