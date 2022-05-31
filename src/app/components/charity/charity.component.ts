import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss']
})
export class CharityComponent implements OnInit {
  public language!: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getLanguage()
      .subscribe((language) => this.language = language);
  }
}
