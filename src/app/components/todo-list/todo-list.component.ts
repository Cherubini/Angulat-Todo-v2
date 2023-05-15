import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoArray:Todo[]=[];

  deleteTodo(todoToDelete:Todo){
    console.log('devo cancellare il todo', todoToDelete.title);
    this.todoArray = this.todoArray.filter(t => t.title !== todoToDelete.title)
  }
}
