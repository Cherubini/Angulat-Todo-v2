import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  constructor(private dataManagerServ: DataManagerService){

  }

  newTodo: Todo = {title:'', priority:1, description:''};

  saveTodo(){
    this.dataManagerServ.addTodo({...this.newTodo});
  }
}
