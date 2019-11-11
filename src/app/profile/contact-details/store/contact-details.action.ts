import { createAction, props } from '@ngrx/store';
import ContactDetails from './contact-details.model';

export const GetContactDetailsAction = createAction(
    '[ContactDetails] - Get ContactDetails'
);

export const BeginGetContactDetailsAction = createAction(
    '[ContactDetails] - Begin Get ContactDetails'
);

export const SuccessGetContactDetailsAction = createAction(
    '[ContactDetails] - Success Get ContactDetails',
    props<{ contactDetails: ContactDetails }>()
);


export const UpdateContactDetailsAction = createAction(
    '[ContactDetails] - Update ContactDetails',
    props<ContactDetails>()
);

export const BeginUpdateContactDetailsAction = createAction(
    '[ContactDetails] - Begin Update ContactDetails',
    props<{ payload: ContactDetails }>()
);

export const SuccessUpdateContactDetailsAction = createAction(
    '[ContactDetails] - Success Update ContactDetails',
    props<{ payload: ContactDetails }>()
);

export const ErrorContactDetailsAction = createAction(
    '[ContactDetails] - Error',
    props<Error>()
);