import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  log=false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar() {
    const user = this.form.value.user;
    const password = this.form.value.password;

    if(user == 'yu' && password == '123'){
      this.fakeLog();
      //redireccionamos
    }else {
      //error;
      this.error();

    }
  }
  error(){
    this._snackBar.open('Usuario o contraseña invalidos', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLog(){
    this.log = true;
    setTimeout(() => {
      // Redireccionamos al dash
      this.router.navigate(['dashboard']);

    }, 2000);
  }

}
