import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { SnackbarService } from './snackbar.service';
import { environment } from '../../environments/environment';
import {computeStyle} from '@angular/animations/browser/src/util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly url = environment.baseUrl + environment.apiUrl;
  addConferenceForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required]
  });
  conferencesNames: any[] = [];
  conferencesData: any[] = [];

  selectedConference: string = 'default';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackbarService: SnackbarService
  ) {
    this.getConferencesNames();
    this.getConferenceData(1, 1);
  }

  getConferencesNames(): void {
    this.http.get(`${this.url}/GetConferencesNames`, httpOptions)
      .subscribe((res): any => this.conferencesNames = res.d);
  }

  getConferenceData(conferenceID: number, pageNumber: number): void {
    const body: any = {
      conferenceID,
      pageNumber
    };

    this.http.post(`${this.url}/getConferenceData`, body, httpOptions)
      .subscribe(res => this.conferencesData = res.d);
  }

  onSubmitNewConference(): void {
    if (this.addConferenceForm.valid) {
      const data: any = {
        conferenceType: this.addConferenceForm.controls.type.value,
        conferenceName: this.addConferenceForm.controls.name.value
      }
      this.http.post(`${this.url}SaveNewConference`, { data }).subscribe((res => {
        if (res !== -1) {
          this.snackbarService.open(
            `כנס ${this.addConferenceForm.get('name').value} התווסף`
          );
          this.addConferenceForm.reset();
        }
      }));
    }
  }
}
