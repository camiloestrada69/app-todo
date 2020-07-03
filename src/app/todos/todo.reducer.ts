import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';



export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Matar a Thanos'),
  new Todo('Robar el escudo del capitan America'),
];

const TodoReducer = createReducer(initialState,

  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(actions.borrar, (state, {id}) =>  state.filter( todo => todo.id !== id)),

  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.toggleAll, (state, {completado}) => state.map( todo => {

    return {
      ...todo,
      completado: completado
    };
  })),

  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.borrarCompletados, state => state.filter(todo => !todo.completado)),
);

export function todoReducer(state, action) {
  return TodoReducer(state, action);
}
