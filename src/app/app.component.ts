import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './shared/todo-item'
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { TodoListService } from './todo-app/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoListService: TodoListService) { }

  title = 'app';

  @Input() userId: number;

  addTodoItem(text){
    this.todoListService.todoItems2.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  todoItems : TodoItem[] = 
  [
    {
      id:1,
      value:'Todo Item 1',
      done: false
    },
    {
      id:2,
      value:'Todo Item 2',
      done: true 
    },
    {
      id:3,
      value:'Todo Item 3',
      done: true
    }
  ];

}
