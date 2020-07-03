import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtroValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';
import { Todo } from './todos/models/todo.model';

export interface AppState {
    todos: Todo[];
    filtro: filtroValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer,
};
