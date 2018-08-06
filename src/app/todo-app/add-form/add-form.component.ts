import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  todoText = "todo";
  placeholderText = "please input something";
  
  constructor() { }

  ngOnInit() {
  }

  @Output("addTodoItem") addTodoItemEvent = new EventEmitter();
  
  private addToDo($event: MouseEvent)
  {
    console.log('function "addToDo" has been clicked ', $event);
    this.addTodoItemEvent.emit(this.todoText + "/" +　$event.clientX.toString());
  }

}
