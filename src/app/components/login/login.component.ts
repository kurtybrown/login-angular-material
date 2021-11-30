import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from 'src/app/models/login.interface';
import { ResponseInterface } from 'src/app/models/response.interface';
import { ProjectService } from 'src/app/services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ProjectService, private router: Router, private snackBar: MatSnackBar) 
  {

  }

  submit(form:LoginInterface): any
  {
    this.api.logIn(form).subscribe(data =>
      { 
        let dataResponse:ResponseInterface = data
        
        if(dataResponse.token)
        {
          localStorage.setItem("token", dataResponse.token);
          this.router.navigate(['data']);
        }
        else
        {
          this.error();
        }
      })
  }

  error()
  {
    this.snackBar.open("Wrong login or password", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  checkLocalStorage()
  {
    if(!localStorage.getItem('token')){
      this.router.navigate(['login'])
    }
  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

}
