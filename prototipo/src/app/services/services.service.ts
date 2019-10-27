import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Escolas } from '../model/Escolas';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json;charset=utf-8'}
  )
};

const API_URL="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  
  //getEscolas() {
    //return this.http.get<Escolas>(`${API_URL}/escolas`, httpOptions);
  //}
}
