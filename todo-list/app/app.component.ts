import {Component} from '@angular/core';

import {TodoListComponent} from './todo/todo-list.component';
import {TodoService} from './todo/todo.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [TodoListComponent], 
    providers: [TodoService]
})
export class AppComponent { }
