import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() topic!: string;

  public slides!: { img: string; }[];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
  };

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    switch (this.topic) {
      case 'report':
        this.slides = this.appService.topics.report;
        break;

      case 'saint_nicolaus_2021':
        this.slides = this.appService.topics.saint_nicolaus_2021;
        break;

      case 'new_year_2018':
        this.slides = this.appService.topics.saint_nicolaus_2021;
        break;

      case 'knowledge_day_2018':
        this.slides = this.appService.topics.knowledge_day_2018;
        break;

      case 'sasha_birthday_2016':
        this.slides = this.appService.topics.sasha_birthday_2016;
        break;

      case 'kostya_birthday_2016':
        this.slides = this.appService.topics.kostya_birthday_2016;
        break;

      case 'opening_2015':
        this.slides = this.appService.topics.opening_2015;
        break;

      case 'fair_2014':
        this.slides = this.appService.topics.opening_2015;
        break;

      case 'new_year_2013':
        this.slides = this.appService.topics.opening_2015;
        break;

      case 'autumn_holiday_2013':
        this.slides = this.appService.topics.autumn_holiday_2013;
        break;

      case 'autumn_holiday_2019':
        this.slides = this.appService.topics.autumn_holiday_2019;
        break;
    }
  }
}

