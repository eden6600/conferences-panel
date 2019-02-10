import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderComponent } from './components/header/header.component';
import { AddConferenceDialogComponent } from './components/add-conference-dialog/add-conference-dialog.component';
import { ConferenceSelectComponent } from './components/conference-select/conference-select.component';
import { ConferenceContentComponent } from './components/conference-content/conference-content.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AddConferenceDialogComponent, ConferenceSelectComponent, ConferenceContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AddConferenceDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
