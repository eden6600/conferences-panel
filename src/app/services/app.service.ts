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

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService
  ) {}

  onSubmit() {
    this.snackbarService.open(
      `כנס ${this.addConferenceForm.get('name').value} התווסף`
    );
  }
}
