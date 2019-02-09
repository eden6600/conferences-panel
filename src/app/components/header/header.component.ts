import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddConferenceDialogComponent } from '../add-conference-dialog/add-conference-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddConferenceDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(res => console.log('closed'));
  }
}
