import { Component, OnInit } from '@angular/core';
import { DataInterface } from 'src/app/models/data.interface';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required)
  })

  constructor(private api: ProjectService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  editData(form: DataInterface)
  {
    this.api.updateItem(this.api.index, form).subscribe(data => {
      if(data)
      {

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
    this.snackBar.open("Error: Item not edited", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  success()
  {
    this.snackBar.open("Item edited successfully", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
