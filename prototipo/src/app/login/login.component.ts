import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Usuario;

  constructor(private formBuilder: FormBuilder,
              private services: ServicesService) { }

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({

      email: [
        '',
        [
          Validators.required, 
          Validators.minLength(4),
          Validators.maxLength(100),
          //Validators.pattern(/^[a-zA-Z @.]+$/)
        ]
      ],
      senha: [
        '',
        [
          Validators.required, 
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ]
    });
  }

  validUser() {
    
  }

}
