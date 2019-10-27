import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Escolas } from '../model/Escolas';
import { Usuario } from '../model/Usuario';
import { Empresa } from '../model/Empresa';
import { Turma } from '../model/Turma';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json;charset=utf-8'}
  )
};

const API_URL = 'http://34.66.79.40:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  //Service que será usado para fazer todos os CRUD's
  //Usuarios
  insertUser(usuario: Usuario) {
    return this.http.post<Usuario>(`${API_URL}/usuarios`, usuario, httpOptions);
  }
  
  getUser(id: string) {
    return this.http.get<Usuario>(`${API_URL}/usuarios/${id}`, httpOptions);
  }

  //Empresa
  insertEmpresa(empresa: Empresa) {
    return this.http.post<Empresa>(`${API_URL}/empresas`, empresa, httpOptions);
  }

  getEmpresa(id: string) {
    return this.http.get<Empresa>(`${API_URL}/empresas/${id}`, httpOptions);
  }

  getEmpresas() {
    return this.http.get<Empresa>(`${API_URL}/empresas`, httpOptions);
  }

  //Escolas
  insertEscola(escola: Escolas) {
    return this.http.post<Escolas>(`${API_URL}/escolas`, escola, httpOptions);
  }

  getEscola(id: string) {
    return this.http.get<Escolas>(`${API_URL}/escolas/${id}`, httpOptions);
  }

  getEscolas() {
    return this.http.get<Escolas>(`${API_URL}/escolas`, httpOptions);
  }

  //Turmas
  insertTurma(turma: Turma) {
    return this.http.post<Turma>(`${API_URL}/turmas`, turma, httpOptions);
  }

  getTurma(id: number) {
    return this.http.get<Turma>(`${API_URL}/turmas/${id}`, httpOptions);
  }

  getTurmas() {
    return this.http.get<Turma>(`${API_URL}/turmas/`, httpOptions);
  }

}
