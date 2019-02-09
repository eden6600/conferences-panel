import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-add-conference-dialog',
  templateUrl: './add-conference-dialog.component.html',
  styleUrls: ['./add-conference-dialog.component.css']
})
export class AddConferenceDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddConferenceDialogComponent>,
    private appService: AppService
  ) {}

  ngOnInit() {}

  onClick() {
    this.dialogRef.close();
    this.appService.onSubmit();
  }
}
