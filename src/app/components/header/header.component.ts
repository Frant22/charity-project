import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public selectedLanguage!: string;

  languages = [
    {value: 'Ukrainian', viewValue: 'UK'},
    {value: 'English', viewValue: 'EN'},
    {value: 'Russian', viewValue: 'RU'},
    {value: 'Deutsche', viewValue: 'DE'},
    {value: 'Français', viewValue: 'FR'},
  ];


  @Output() selectedInfo = new EventEmitter<string>();

  constructor(
    private scroller: ViewportScroller,
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.getLanguage()
      .subscribe(language =>
        this.selectedLanguage = language);
  }

  moveToFooter() {
    this.scroller.scrollToAnchor("footer")
  }

  selectLanguage(event: any) {
    this.selectedLanguage = event.value;
    this.appService.setLanguage(event.value);

    localStorage.setItem('language', event.value);
  }
}
