import { Component, OnInit } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonButtons, IonButton, IonIcon, IonMenuToggle } from "@ionic/angular/standalone";
import { GlobalService } from "../../services/global/global.service";
import { addIcons } from 'ionicons'; 
import { menuOutline } from "ionicons/icons";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonMenuToggle ],
})
export class HeaderMainComponent  implements OnInit {

  constructor(
    public globalService: GlobalService
  ) {
    addIcons({ menuOutline });
  }

  ngOnInit() {}

}
