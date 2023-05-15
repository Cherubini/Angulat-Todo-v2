import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter();
  newTodo: Todo = {title:'', priority:1, description:''};

  saveTodo(){
    this.todoCreated.emit({...this.newTodo});
  }
}
