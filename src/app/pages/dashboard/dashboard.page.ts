import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderMainComponent } from "../../shared/components/header-main/header-main.component";
import { GlobalService } from "../../shared/services/global/global.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderMainComponent]
})
export class DashboardPage implements OnInit {

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.globalService.titleMain = 'Dashboard';
  }

}
