import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Usuario } from '../model/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Usuario
  
  constructor(private services: ServicesService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({

    nome: [
      '',
      [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(100),
        //Validators.pattern(/^[a-zA-Z ]+$/)
      ]
    ], 
    sobrenome: [
      '',
      [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(100),
      //Validators.pattern(/^[a-zA-Z ]+$/)
      ]
    ],
    email: [
      '',
      [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(100),
        //Validators.pattern(/^[a-zA-Z @]+$/)
      ]
    ],
    cpf: [
      '',
      [
       Validators.required, 
       Validators.minLength(11),
       Validators.maxLength(11),
       //Validators.pattern(/^[0-9-.]+$/)
     ]
    ],
    turma: [
      '',
      [
       Validators.required, 
       Validators.minLength(3),
       Validators.maxLength(20),
       //Validators.pattern(/^[0-9]+$/)
     ]
    ],
    empresa: [
      '',
      [
       Validators.required, 
       Validators.minLength(2),
       Validators.maxLength(20),
       //Validators.pattern(/^[a-zA-Z ]+$/)
     ]
    ]
  });
}

cadUser() {
    const novoUsuario = this.usuarioForm.getRawValue() as Usuario;

    this.services.insertUser(novoUsuario).subscribe(
      () => {
        this.usuarioForm.reset();
      },
      error => {
        console.log(error);
        this.usuarioForm.reset();
      }
    );
  }
}
