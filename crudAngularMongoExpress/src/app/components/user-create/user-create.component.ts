import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  title = "Crear Usuario"; 
  id: string | null;

  constructor(private fb: FormBuilder, 
    private router: Router, private _userService: UserService, private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Edad: ['', Validators.required],
      Dni: ['', Validators.required],
      Cumpleanos: ['', Validators.required],
      ColorFav: ['', Validators.required],
      Sexo: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editUser();
  }

  addUser() {
    const USER: User = {
      Nombre: this.userForm.get('Nombre')?.value,
      Apellidos: this.userForm.get('Apellidos')?.value,
      Edad: this.userForm.get('Edad')?.value,
      Dni: this.userForm.get('Dni')?.value,
      Cumpleanos: this.userForm.get('Cumpleanos')?.value,
      ColorFav: this.userForm.get('ColorFav')?.value,
      Sexo: this.userForm.get('Sexo')?.value
    }

    if(this.id !== null) {
      this._userService.editUser(this.id, USER).subscribe(data => {
        this.router.navigate(['/']);
      },error => {
        console.log(error);
        this.userForm.reset();
      })
    } else {
      console.log(USER);
      this._userService.saveUser(USER).subscribe(data => {
        console.log("Usuario añadido")
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
      this.router.navigate(['/']);
    }

  
  }

  editUser() {
    console.log("entramos en editUser")

    if(this.id !== null) {
      this.title = 'Editar Usuario';
      this._userService.getUser(this.id).subscribe(data => {
        console.log(data.Nombre)
        this.userForm.setValue({
          Nombre: data.Nombre,
          Apellidos: data.Apellidos,
          Edad: data.Edad,
          Dni: data.Dni,
          Cumpleanos: data.Cumpleanos,
          ColorFav: data.ColorFav,
          Sexo: data.Sexo
        })
      })
    }
  }

}
