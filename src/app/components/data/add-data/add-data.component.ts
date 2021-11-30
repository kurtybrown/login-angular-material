import { Component, OnInit } from '@angular/core';
import { DataInterface } from 'src/app/models/data.interface';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required)
  })

  constructor(private api: ProjectService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  addData(form: DataInterface)
  {
    this.api.addItem(form).subscribe(data => {
      if(data)
      {
        this.success()
      }
      else{
        this.error
      }
    });
    this.router.navigate(['data']);
  }

  checkLocalStorage()
  {
    if(!localStorage.getItem('token')){
      this.router.navigate(['login'])
    }
  }

  error()
  {
    this.snackBar.open("Error: Item not created", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  success()
  {
    this.snackBar.open("Item created successfully", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}

