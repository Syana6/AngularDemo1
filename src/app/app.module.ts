import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
// import { AddFormComponent } from './add-form/add-form.component';
// import { TodoItemsComponent } from './todo-items/todo-items.component';
// import { TodoListService } from './todo-list.service';
// import { TodoDonePipe } from './todo-done.pipe';
import { BsButtonDirective } from './bs-button.directive';
import { TodoAppModule } from './todo-app/todo-app.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AddFormComponent,
    // TodoItemsComponent,
    // TodoDonePipe,
    BsButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpModule,
    TodoAppModule
  ],
  providers: [
    // TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
