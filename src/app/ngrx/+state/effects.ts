import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { todoListActions } from './actions';

@Injectable({
  providedIn: 'root'
})
export class NgrxEffects {

  constructor(private actions$: Actions) { }

  $add = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.add),
    map(({ type }) => todoListActions.alert({ actionType: type }))
  ))

  $update = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.update),
    map(({ type }) => todoListActions.alert({ actionType: type }))
  ))

  $remove = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.remove),
    map(({ type }) => todoListActions.alert({ actionType: type }))
  ))

  $alert = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.alert),
    tap(({ actionType }) => {
      alert(actionType)
    })
  ), { dispatch: false })

}
