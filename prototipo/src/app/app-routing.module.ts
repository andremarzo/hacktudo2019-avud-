import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CadEmpresaComponent } from './cad-empresa/cad-empresa.component';
import { CadEscolaComponent } from './cad-escola/cad-escola.component';
import { CadTurmaComponent } from './cad-turma/cad-turma.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadUsuario', component: CadUsuarioComponent },
  { path: 'cadEmpresa', component: CadEmpresaComponent },
  { path: 'cadEscola', component: CadEscolaComponent },
  { path: 'cadturma', component: CadTurmaComponent }
];  

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
