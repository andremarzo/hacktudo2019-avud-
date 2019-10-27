import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Turma } from '../model/Turma';

@Component({
  selector: 'app-cad-turma',
  templateUrl: './cad-turma.component.html',
  styleUrls: ['./cad-turma.component.css']
})
export class CadTurmaComponent implements OnInit {

  turmaForm: FormGroup;
  turma: Turma;

  constructor(private formBuilder: FormBuilder,
              private services: ServicesService) { }

  ngOnInit() {
    this.turmaForm = this.formBuilder.group({

      turma: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(5),
          //Validators.pattern(/^[0-9]+$/)
        ]
      ], 
      escola: [
        '',
        [
          Validators.required, 
          Validators.minLength(4), 
          Validators.maxLength(100),
        //Validators.pattern(/^[a-zA-Z ]+$/)
        ]
      ],
      coleta: [
        '',
        [
          Validators.required, 
          Validators.minLength(1), 
          Validators.maxLength(10),
        //Validators.pattern(/^[0-9]+$/)
        ]
      ]
    });
  }
  cadTurma() {
    const novaTurma = this.turmaForm.getRawValue() as Turma;

    this.services.insertTurma(novaTurma).subscribe(
      () => {
        this.turmaForm.reset();
      },
      error => {
        console.log(error);
        this.turmaForm.reset();
      }
    ); 
  }
}
