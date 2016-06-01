import {Injectable} from "@angular/core";
import {Todo} from "./todo";

@Injectable()
export class TodoService {
    private _todosList: Todo[] = [
        {
            todoId: 0,
            description: "Prepare presentation",
            done: true
        }, {
            todoId: 1,
            description: "Present presentation",
            done: true
        }, {
            todoId: 2,
            description: "Show demo",
            done: false
        }
    ];

    getTodos(): Todo[] {
        return this._todosList;
    }

    addTodo(todo: Todo): void {
        this._todosList.push(todo);
    }

    removeTodo(todo: Todo): void {
        var index = this._todosList.indexOf(todo, 0);
        this._todosList.splice(index, 1);
    }
}