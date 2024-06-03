import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderMainComponent } from "../../shared/components/header-main/header-main.component";
import { GlobalService } from "../../shared/services/global/global.service";

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.page.html',
  styleUrls: ['./convenios.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderMainComponent ]
})
export class ConveniosPage implements OnInit {

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.globalService.titleMain = 'Convenios';
  }

}
