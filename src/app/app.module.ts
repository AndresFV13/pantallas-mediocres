import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//PRIMENG
import {PRIMENG_MODULES} from "./prime-ng/prime-ng.module";
import { TablePrincipalComponent } from './table-principal/table-principal.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePrincipalComponent,
    EditUsersComponent,
    AddUsersComponent
  ],
  exports:[
    AddUsersComponent
  ],
  imports: [
    BrowserModule,
    PRIMENG_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
