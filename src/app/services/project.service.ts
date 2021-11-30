import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginInterface} from '../models/login.interface'
import { ResponseInterface } from '../models/response.interface';
import { Observable } from 'rxjs';
import { DataInterface } from '../models/data.interface';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public url = "https://enigmatic-spire-22888.herokuapp.com/api/";

  public index!: number;

  constructor(private http: HttpClient) {

  }

  public logIn(form:LoginInterface): Observable<ResponseInterface>
  {
    let parsedForm = JSON.stringify(form);
    let address = `${this.url}user/login/`
    return this.http.post<ResponseInterface>(address, parsedForm);
  }

  public getData(): Observable<DataInterface[]>
  {
    const token = localStorage.getItem('token');
    let address = `${this.url}data/get/?token=${token}`
    return this.http.get<DataInterface[]>(address);
  }

  public getItem(id:number): Observable<DataInterface>
  {
    const token = localStorage.getItem('token');
    let address = `${this.url}data/get/${id}/?token=${token}`
    return this.http.get<DataInterface>(address);
  }

  public addItem(form:DataInterface): Observable<DataInterface>
  {
    let parsedForm = JSON.stringify(form);
    const token = localStorage.getItem('token');
    let address = `${this.url}data/create/?token=${token}`
    return this.http.post<DataInterface>(address, parsedForm);
  }

  public updateItem(id:number, form:DataInterface): Observable<DataInterface>
  {
    let parsedForm = JSON.stringify(form);
    const token = localStorage.getItem('token');
    let address = `${this.url}data/update/${id}/?token=${token}`
    return this.http.post<DataInterface>(address, parsedForm);
  }

  public deleteItem(id:number): Observable<DataInterface>
  {
    const token = localStorage.getItem('token');
    let address = `${this.url}data/delete/${id}/?token=${token}`
    return this.http.get<DataInterface>(address);
  }

}
