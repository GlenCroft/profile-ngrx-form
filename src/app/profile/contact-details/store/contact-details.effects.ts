import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ContactDetailsActions from './contact-details.action';
import ContactDetails from './contact-details.model';

@Injectable()
export class ContactDetailsEffects {
  constructor( private action$: Actions ) {}

  GetContactDetails$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(ContactDetailsActions.BeginGetContactDetailsAction),
    mergeMap(action =>
      this.mockHttpGet('').pipe(
        map((data: ContactDetails) => {
          return ContactDetailsActions.SuccessGetContactDetailsAction({ contactDetails: data });
        }),
        catchError((error: Error) => {
          return of(ContactDetailsActions.ErrorContactDetailsAction(error));
        })
      )
    )
  ));

  private mockHttpGet(url: string) {
    console.log('MOCKED HTTP GET');
    return of({
        phone: '01234567890',
        email: 'croft.glen@gmail.com',
        line1: '12 Avenue Road',
        line2: null,
        town: 'Townington',
        postCode: 'P05T CDE'
    })
  }

  UpdateContactDetails$: Observable<Action> = createEffect(() => this.action$.pipe(
    ofType(ContactDetailsActions.BeginUpdateContactDetailsAction),
    mergeMap(action =>
      this.mockHttpPost('', action.payload).pipe(
        map(() => {
          return ContactDetailsActions.SuccessUpdateContactDetailsAction({ payload: action.payload });
        }),
        catchError((error: Error) => {
          return of(ContactDetailsActions.ErrorContactDetailsAction(error));
        })
      )
    )
  ));

  private mockHttpPost(url: string, payload: ContactDetails) {
    console.log('MOCKED HTTP POST');
    return of(null);
  }

}