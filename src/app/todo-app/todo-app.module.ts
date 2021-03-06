import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoDonePipe } from './todo-done.pipe';
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    TodoAppComponent,
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    TodoListService
  ],
  exports:[
    AddFormComponent,
    TodoItemsComponent
  ]
})
export class TodoAppModule { }
