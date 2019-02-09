import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  public open(message, duration = 3000) {
    this.zone.run(() => {
      this.snackBar.open(message, null, { duration });
    });
  }
}
