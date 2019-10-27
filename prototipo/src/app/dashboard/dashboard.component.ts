import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Escolas } from '../model/Escolas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  escolas: Escolas;
  totalArrecadado: number;

  constructor(private service: ServicesService) { }

  ngOnInit() {

  }

  /*listaEscolas() {
    this.service.getEscolas().subscribe(
      escolaDB => this.escolas = escolaDB,
      errorDB => console.log(errorDB)
    );
  }*/

}
