import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentInfo = 'main';
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
    this.appService.language$
      .subscribe((language) => this.selectedLanguage = language);
    console.log(this.selectedLanguage)
  }

  moveToFooter() {
    this.scroller.scrollToAnchor("footer")
  }

  selectLanguage(event: any) {
    this.selectedLanguage = event.value;
    this.appService.setLanguage(event.value);

    localStorage.setItem('language', event.value);
  }

  // selectInfo(event: string) {
  //   this.currentInfo = event;
  //   this.selectedInfo.emit(event);
  // }
}
