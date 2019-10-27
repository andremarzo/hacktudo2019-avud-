import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Escolas } from '../model/Escolas';

@Component({
  selector: 'app-cad-escola',
  templateUrl: './cad-escola.component.html',
  styleUrls: ['./cad-escola.component.css']
})
export class CadEscolaComponent implements OnInit {

  escolaForm: FormGroup;
  escola: Escolas;

  constructor(private formBuilder: FormBuilder,
              private services: ServicesService) { }

  ngOnInit() {
    this.escolaForm = this.formBuilder.group({

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
      ]
    });
  }

  cadEscola() {
    const novaEscola = this.escolaForm.getRawValue() as Escolas;

    this.services.insertEscola(novaEscola).subscribe(
      () => {
        this.escolaForm.reset();
      },
      error => {
        console.log(error);
        this.escolaForm.reset();
      }
    );
  }
}
