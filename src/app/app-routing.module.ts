import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { LoginComponent } from './components/login/login.component';
import { AddDataComponent } from './components/data/add-data/add-data.component';
import { UpdateDataComponent } from './components/data/update-data/update-data.component';
import { DeleteDataComponent } from './components/data/delete-data/delete-data.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path:"login", component: LoginComponent},
  {path:"data", component: DataComponent},
  {path:"add-data", component: AddDataComponent},
  {path:"update-data", component: UpdateDataComponent},
  {path:"delete-data", component: DeleteDataComponent},
  {path: "**", redirectTo: "login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
