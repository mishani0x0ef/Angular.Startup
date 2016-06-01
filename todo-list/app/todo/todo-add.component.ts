import {Component} from "@angular/core";
import {Todo} from "./todo";
import {TodoService} from "./todo.service";

@Component({
    selector: "todo-add",
    templateUrl: "./app/todo/todo-add.component.html"
})
export class TodoAddComponent {
    constructor(private _todoService: TodoService) {
    }

    editedTodo: Todo = new Todo();

    saveTodo(): void {
        this._todoService.addTodo(this.editedTodo);
        this.editedTodo = new Todo();
    }
}