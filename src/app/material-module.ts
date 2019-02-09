import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialModule {}
