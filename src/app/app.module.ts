import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { AimsComponent } from './components/aims/aims.component';
import { MainComponent } from './components/main/main.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { EventsComponent } from './components/events/events.component';
import {Routes, RouterModule} from "@angular/router";
import { CharityComponent } from './components/charity/charity.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {AppService} from "./app.service";
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'aims', component: AimsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'teachers', component: TeachersComponent},
  { path: 'directions', component: DirectionsComponent},
  { path: 'charity', component: CharityComponent},
  { path: 'gallery', component: GalleryComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AimsComponent,
    MainComponent,
    DirectionsComponent,
    TeachersComponent,
    EventsComponent,
    CharityComponent,
    CarouselComponent,
    GalleryComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
