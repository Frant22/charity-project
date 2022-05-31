import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../../app.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public language!: string;

  @ViewChild('menu') menu!: ElementRef;

  constructor(
    private appService : AppService,
    private scroller: ViewportScroller,
  ) { }

  ngOnInit(): void {
    this.appService.getLanguage()
      .subscribe((language) => this.language = language);
  }

  moveToFooter() {
    this.scroller.scrollToAnchor("footer")
  }

  closeMenu() {
    this.menu.nativeElement.checked = false;
  }
}
