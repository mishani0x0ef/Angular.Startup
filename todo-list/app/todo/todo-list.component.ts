import {Component} from "@angular/core";
import {Todo} from "./todo";
import {TodoAddComponent} from "./todo-add.component"
import {TodoService} from "./todo.service";

@Component({
    selector: "todo-list",
    templateUrl: "./app/todo/todo-list.component.html",
    directives: [TodoAddComponent]
})
export class TodoListComponent {
    todos: Todo[];
    
    constructor (private _todoService: TodoService){ 
        this.todos = _todoService.getTodos();       
    }
    
    removeTodo(todo: Todo): void{
        this._todoService.removeTodo(todo);
    }
}