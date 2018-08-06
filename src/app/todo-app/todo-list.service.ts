import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TodoItem } from '../shared/todo-item'


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoItems: TodoItem[];
  // = [{
  //   id: 1,
  //   value: 'One',
  //   done: false
  // },
  // {
  //   id: 2,
  //   value: 'Two',
  //   done: true
  // }];

  todoItems2: TodoItem[];
  //  = [{
  //   id: 6,
  //   value: 'Six',
  //   done: false
  // },
  // {
  //   id: 7,
  //   value: 'Seven',
  //   done: true
  // },
  // {
  //   id: 8,
  //   value: 'Eight',
  //   done: false
  // },
  // ];

  constructor(private http: Http) { }

  loadTodoLits() {
    this.http.get('/assets/todo-list.json')
      .toPromise()
      .then(response => { this.todoItems2 = response.json(); })
  }

  getTodoList() {
    return this.todoItems2;
  }

  addTodo(text) {
    this.todoItems2.push(
      {
        id: (new Date()).getTime(),
        value: text,
        done: false
      }
    );
  }

  deleteItem(item: TodoItem) {
    this.todoItems2 = this.todoItems2.filter(todoItems2 => todoItems2.id != item.id);
  }

  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }
}
