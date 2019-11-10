import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-details-view',
  templateUrl: 'contact-details-view.component.html'
})
export class ContactDetailsView {
  @Output()
  public onEdit = new EventEmitter<void>();

  constructor() {}

  public onEditContact() {
    this.onEdit.emit();
  }

}
