import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  constructor(private api: ProjectService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.checkLocalStorage()
  }

  deleteItem()
  {
    this.api.deleteItem(this.api.index).subscribe(data => {
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
    this.snackBar.open("Error: Item not deleted", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  success()
  {
    this.snackBar.open("Item deleted successfully", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
