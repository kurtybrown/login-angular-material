import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';

//Components
import { LoginComponent } from './components/login/login.component';
import { DataComponent } from './components/data/data.component';
import { AddDataComponent } from './components/data/add-data/add-data.component';
import { UpdateDataComponent } from './components/data/update-data/update-data.component';
import { DeleteDataComponent } from './components/data/delete-data/delete-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent,
    AddDataComponent,
    UpdateDataComponent,
    DeleteDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
