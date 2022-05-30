import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  public language!: string;

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.setLanguage(localStorage.getItem('language')!);
  }
}
