import { Component, OnInit } from '@angular/core';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenuToggle, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons'; 
import { analyticsOutline, listOutline, idCardOutline, peopleOutline, medalOutline  } from "ionicons/icons";

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss'],
  standalone: true,
  imports: [ IonLabel, IonItem, IonIcon, IonButton,  IonMenu, IonContent, IonTitle, IonToolbar, IonHeader, IonMenuToggle, RouterLink],
})
export class MenuMainComponent  implements OnInit {

  constructor() {
    addIcons({ analyticsOutline, listOutline, idCardOutline, peopleOutline, medalOutline });
  }

  ngOnInit() {}

}
