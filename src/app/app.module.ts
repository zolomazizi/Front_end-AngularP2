import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { SideNewsComponent } from './component/layout/side-news/side-news.component';
import { BodyArticlesComponent } from './component/body-articles/body-articles.component';
import { FooterArticlesComponent } from './component/footer-articles/footer-articles.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BusinessComponent } from './business/business.component';
import { OpinionComponent } from './opinion/opinion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftsidebarComponent } from './dashboard/leftsidebar/leftsidebar.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { RightsidebarComponent } from './dashboard/rightsidebar/rightsidebar.component';
import { TopcardsComponent } from './dashboard/topcards/topcards.component';
import { PubliciteComponent } from './component/layout/publicite/publicite.component';
import { DetailsComponent } from './details/details.component';
import { DetailJournalisteComponent } from './detail-journaliste/detail-journaliste.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SliderComponent,
    SideNewsComponent,
    BodyArticlesComponent,
    FooterArticlesComponent,
    HomePageComponent,
    BusinessComponent,
    OpinionComponent,
    DashboardComponent,
    LeftsidebarComponent,
    MainpageComponent,
    RightsidebarComponent,
    TopcardsComponent,
    PubliciteComponent,
    DetailsComponent,
    DetailJournalisteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
