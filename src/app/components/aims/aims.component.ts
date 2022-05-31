import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-aims',
  templateUrl: './aims.component.html',
  styleUrls: ['./aims.component.scss']
})
export class AimsComponent implements OnInit {
  public language!: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getLanguage()
      .subscribe((language) => this.language = language);
  }
}
