import { Action, createReducer, on } from '@ngrx/store';
import * as ContactDetailsActions from './contact-details.action';
import ContactDetails from './contact-details.model';
import ContactDetailsState, { initializeState } from './contact-details.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(ContactDetailsActions.GetContactDetailsAction, state => state),
  on(ContactDetailsActions.SuccessGetContactDetailsAction, (state: ContactDetailsState, { contactDetails }) => {
    return { ...state, ContactDetails: contactDetails };
  }),
  on(ContactDetailsActions.UpdateContactDetailsAction, (state: ContactDetailsState, contactDetails: ContactDetails) => {
    return { ...state, ContactDetails: {...state.ContactDetails, ...contactDetails}, ContactDetailsError: null };
  }),
  on(ContactDetailsActions.SuccessUpdateContactDetailsAction, (state: ContactDetailsState, { payload }) => {
    return { ...state, ContactDetails: {...state.ContactDetails, ...payload}, ContactDetailsError: null };
  }),
  on(ContactDetailsActions.ErrorContactDetailsAction, (state: ContactDetailsState, error: Error) => {
    console.log(error);
    return { ...state, ContactDetailsError: error };
  })
);

export function ContactDetailsReducer(state: ContactDetailsState | undefined, action: Action) {
  return reducer(state, action);
}