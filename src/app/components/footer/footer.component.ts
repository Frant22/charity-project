import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public language!: string;

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.getLanguage()
      .subscribe((language) => this.language = language);
  }
}
