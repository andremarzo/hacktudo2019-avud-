import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/Empresa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cad-empresa',
  templateUrl: './cad-empresa.component.html',
  styleUrls: ['./cad-empresa.component.css']
})
export class CadEmpresaComponent implements OnInit {

  empresaForm: FormGroup;
  empresa: Empresa;

  constructor(private formBuilder: FormBuilder,
              private services: ServicesService) { }

  ngOnInit() {
    this.empresaForm = this.formBuilder.group({

      nome: [
        '',
        [
          Validators.required, 
          Validators.minLength(4),
          Validators.maxLength(100),
          //Validators.pattern(/^[a-zA-Z ]+$/)
        ]
      ], 
      estado: [
        '',
        [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(100),
        //Validators.pattern(/^[a-zA-Z ]+$/)
        ]
      ], 
      municipio: [
        '',
        [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(100),
        //Validators.pattern(/^[a-zA-Z ]+$/)
        ]
      ], 
      bairro: [
        '',
        [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(100),
        //Validators.pattern(/^[a-zA-Z ]+$/)
        ]
      ], 
      telefone: [
        '',
        [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(20),
        //Validators.pattern(/^[0-9-]+$/)
        ]
      ]
    });
  }

  cadEmpresa() {
    const novaEmpresa = this.empresaForm.getRawValue() as Empresa;

    this.services.insertEmpresa(novaEmpresa).subscribe(
      () => {
        this.empresaForm.reset();
      },
      error => {
        console.log(error);
        this.empresaForm.reset();
      }
    );
  }

}
