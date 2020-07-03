import { createReducer, on, State } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtroValidos } from './filtro.actions';

export const initialState: filtroValidos = 'todos';

const _filtroReducer = createReducer(initialState,
  on(actions.setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
