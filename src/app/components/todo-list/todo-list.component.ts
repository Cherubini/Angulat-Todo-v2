import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(public dataManagerServ: DataManagerService) {
  }


}
