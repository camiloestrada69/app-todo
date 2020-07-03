import { createAction, props } from '@ngrx/store';

export type filtroValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{filtro: filtroValidos}>()
);

export const borrarCompletados = createAction(
    '[Filtro] Borrar completados',
    props<{filtro: filtroValidos}>()
);

