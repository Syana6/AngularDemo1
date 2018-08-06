import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../shared/todo-item';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  // @Input('Items') Itemsa: TodoItem[];

  constructor(private todolistService: TodoListService) { }

  ngOnInit() {
    this.todolistService.loadTodoLits();
  }

  getBlueClass()
  {
    return 'green';
  }

  getTodoList(){
    return this.todolistService.getTodoList();
  }

  itemClick(item: TodoItem)
  {
    this.todolistService.toogleItemStatus(item);
  }

  delete(item: TodoItem) {
    this.todolistService.deleteItem(item);
  }
}
