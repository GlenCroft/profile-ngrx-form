import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import ContactDetails from '../store/contact-details.model';
import ContactDetailsState from '../store/contact-details.state';
import * as ContactDetailsActions from '../store/contact-details.action';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details-edit',
  templateUrl: 'contact-details-edit.component.html'
})
export class ContactDetailsEdit implements OnInit {
  formGroup: FormGroup;
  contactDetails$: Observable<ContactDetails>;
  contactDetailsSubscription: Subscription;

  constructor(
    private store: Store<ContactDetailsState>,
    private actions$: Actions,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
    ) {
    this.contactDetails$ = store.pipe(select('ContactDetails'));
  }

  ngOnInit() {
    this.contactDetailsSubscription = this.contactDetails$.pipe(
      map(x => {
        this.formGroup = this.initForm(x.ContactDetails);
      })
    ).subscribe();
    this.store.dispatch(ContactDetailsActions.BeginGetContactDetailsAction());
  }

  ngOnDestroy() {
    this.contactDetailsSubscription.unsubscribe();
  }

  private initForm(details: ContactDetails): FormGroup {
    return this.formBuilder.group({
      phone: [details.phone, Validators.required],
      email: [details.email, [Validators.required, Validators.email]],
      line1: [details.line1, Validators.required],
      line2: [details.line2],
      town: [details.town, Validators.required],
      postCode: [details.postCode, Validators.required]
    })
  }

  onSave() {
    if (this.formGroup.dirty && this.formGroup.valid) {
      this.actions$.pipe(ofType(ContactDetailsActions.SuccessUpdateContactDetailsAction)).subscribe(() => {
        this.onSuccessUpdate();
      });
      this.store.dispatch(ContactDetailsActions.BeginUpdateContactDetailsAction({ payload: this.formGroup.value }));
    } else if (this.formGroup.invalid) {
      this.onValidationError();
    } else {
      this.close()
    }
  }

  private async onValidationError() {
    const toast = await this.toastController.create({
      message: 'There are errors in the form',
      duration: 2000
    });
    toast.present();
  }

  private async onSuccessUpdate() {
    const toast = await this.toastController.create({
      message: 'Contact details saved',
      duration: 2000
    });
    toast.present();
    this.close();
  }

  private close() {
    this.router.navigate(['profile']);
  }

}
