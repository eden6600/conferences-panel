import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  addConferenceForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required]
  });
  conferences: string[] = ['דרום אדום', 'באר שבע צהובה'];
  selectedConference: string = 'default';

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService
  ) {}

  onSubmitNewConference() {
    this.snackbarService.open(
      `כנס ${this.addConferenceForm.get('name').value} התווסף`
    );

    this.addConferenceForm.reset();
  }
}
