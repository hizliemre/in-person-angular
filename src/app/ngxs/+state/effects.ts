import { Injectable } from '@angular/core';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { tap } from 'rxjs';
import { TodoListActions } from './actions';

@Injectable({
  providedIn: 'root'
})
export class NgxsEffects {

  constructor(private readonly _actions$: Actions) { }

  public init(): void {
    this._actions$.pipe(
      tap((a) => console.log(a)),
      ofActionSuccessful(TodoListActions.Add),
      tap(() => alert('added')),
    ).subscribe();
    this._actions$.pipe(
      ofActionSuccessful(TodoListActions.Remove),
      tap(() => alert('removed')),
    ).subscribe();
    this._actions$.pipe(
      ofActionSuccessful(TodoListActions.Update),
      tap(() => alert('updated')),
    ).subscribe();
  }

}
