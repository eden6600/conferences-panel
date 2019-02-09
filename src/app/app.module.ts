import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderComponent } from './components/header/header.component';
import { AddConferenceDialogComponent } from './components/add-conference-dialog/add-conference-dialog.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AddConferenceDialogComponent, SnackBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [AddConferenceDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
