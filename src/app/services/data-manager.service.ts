import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  todos: Todo[];

  constructor() {
    this.todos = [
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
   }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  deleteTodo(todoToDelete:Todo){
    console.log('cry');

    this.todos = this.todos.filter(t=> t.title !== todoToDelete.title)
    console.log(this.todos);

  }
}

