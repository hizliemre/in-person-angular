import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { todoListActions } from './actions';

@Injectable({
  providedIn: 'root'
})
export class NgrxEffects {

  constructor(private actions$: Actions) { }

  $add = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.add),
    tap(() => {
      alert('added')
    })
  ), { dispatch: false })

  $update = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.update),
    tap(() => {
      alert('updated')
    })
  ), { dispatch: false })

  $remove = createEffect(() => this.actions$.pipe(
    ofType(todoListActions.remove),
    tap(() => {
      alert('removed')
    })
  ), { dispatch: false })

}
