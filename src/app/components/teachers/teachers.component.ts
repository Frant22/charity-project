import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  public language!: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getLanguage()
      .subscribe((language) => this.language = language);
  }
}
