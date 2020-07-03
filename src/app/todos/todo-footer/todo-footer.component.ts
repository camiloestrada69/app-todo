import { Component, OnInit } from '@angular/core';
import * as actions from '../../filtro/filtro.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  public filtroActual: actions.filtroValidos = 'todos';
  public filtros = ['todos', 'completados', 'pendientes'];
  public pendientes = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    /*this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);*/
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actions.filtroValidos) {
    this.store.dispatch(actions.setFiltro({filtro: filtro}));
  }

  borrarCompletados() {
    this.store.dispatch(borrarCompletados());
  }

}
