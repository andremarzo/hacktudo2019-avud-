import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Escolas } from '../model/Escolas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  escolas: Escolas;
  totalArrecadado: number;
  random = 1;  

  constructor(private service: ServicesService) { }

  ionViewWillEnter(): void {
    this.listaEscolas();
  }

  listaEscolas() {
    this.service.getEscolas().subscribe(
      escolaDB => this.escolas = escolaDB,
      errorDB => console.log(errorDB)
    );
  }  

  while(listaEscolas) {
      this.random = this.random + 1;
  }

}
