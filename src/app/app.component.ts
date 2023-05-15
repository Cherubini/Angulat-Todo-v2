import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';

  todos: Todo[] = [
    {
      title: 'regalo alla nonna',
      description: 'Compra il profumo che le piace assai',
      priority: 3,
    },
    {
      title: 'compra il pane',
      priority: 1
    }
  ]

  addTodo(todo:Todo){
    this.todos.push(todo);
  }
}
