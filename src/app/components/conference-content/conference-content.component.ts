import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-conference-content',
  templateUrl: './conference-content.component.html',
  styleUrls: ['./conference-content.component.css']
})
export class ConferenceContentComponent implements OnInit {


  constructor(private appService: AppService) { }

  ngOnInit() {

  }

}
