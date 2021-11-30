import { Component, OnInit, ViewChild } from '@angular/core';
import { DataInterface } from 'src/app/models/data.interface';
import { ProjectService } from 'src/app/services/project.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  dataList!: DataInterface[];
  displayedColumns: string[] = ['id', 'name', 'value', 'actions'];
  dataSource = new MatTableDataSource(this.dataList);
  showDelete: boolean = false;
  index!:number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ProjectService, private router: Router) {
  }

  getAll()
  { 
    this.api.getData().subscribe(data =>
      {
        this.dataSource = new MatTableDataSource(data);
        this.ngAfterViewInit()
      })
  }

  getItem(index:number)
  {
    this.api.getItem(index).subscribe(data =>{
      console.log(data);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goAddData()
  {
    this.router.navigate(['add-data'])
  }

  goDeleteData(index:number)
  {
    this.api.index = index;
    this.router.navigate(['delete-data'])
  }

  goUpdateData(index:number)
  {
    this.api.index = index;
    this.router.navigate(['update-data'])
  }

  checkLocalStorage()
  {
    if(!localStorage.getItem('token')){
      this.router.navigate(['login'])
    }
  }

  logOut()
  {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.getAll();
    this.checkLocalStorage();
  }

}
