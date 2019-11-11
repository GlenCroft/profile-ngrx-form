import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import ContactDetails from './store/contact-details.model';
import * as ContactDetailsActions from './store/contact-details.action';
import ContactDetailsState from './store/contact-details.state';

@Component({
  selector: 'app-contact-details-view',
  templateUrl: 'contact-details-view.component.html'
})
export class ContactDetailsView implements OnInit, OnDestroy {
  @Output()
  onEdit = new EventEmitter<void>();

  contactDetails$: Observable<ContactDetails>;
  contactDetailsSubscription: Subscription;
  contactDetailsData: ContactDetails;

  constructor( private store: Store<ContactDetailsState> ) {
    this.contactDetails$ = store.pipe(select('ContactDetails'));
  }

  ngOnInit() {
    this.contactDetailsSubscription = this.contactDetails$.pipe(
      map(x => {
        this.contactDetailsData = x.ContactDetails;
      })
    ).subscribe();
    this.store.dispatch(ContactDetailsActions.BeginGetContactDetailsAction());
  }

  ngOnDestroy() {
    this.contactDetailsSubscription.unsubscribe();
  }

  onEditContact() {
    this.onEdit.emit();
  }

}
