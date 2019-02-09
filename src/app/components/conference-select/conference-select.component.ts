import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-conference-select',
  templateUrl: './conference-select.component.html',
  styleUrls: ['./conference-select.component.css']
})
export class ConferenceSelectComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit() {}
}
