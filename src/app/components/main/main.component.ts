import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public language!: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.language$
      .subscribe((language) => this.language = language);
  }
}
