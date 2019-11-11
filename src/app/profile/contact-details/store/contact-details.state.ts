import ContactDetails from './contact-details.model';

export default class ContactDetailsState {
    ContactDetails: ContactDetails
}

export const initializeState = () => {
    return { ContactDetails: {} };
};