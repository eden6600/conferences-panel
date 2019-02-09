import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar, private appService: AppService) {}

  ngOnInit() {}

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1000
    });
  }
}
