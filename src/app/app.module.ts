import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { TodoDashComponent } from './shared/components/todo-dash/todo-dash.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { StdDashComponent } from './shared/components/std-dash/std-dash.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { FormsModule } from '@angular/forms';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { CTableComponent } from './shared/components/c-table/c-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashComponent,
    TodoFormComponent,
    TodoListComponent,
    StdDashComponent,
    StdFormComponent,
    StdTableComponent,
    PostDashComponent,
    CardsComponent,
    CTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
