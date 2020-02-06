import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BusinessComponent } from './business/business.component';
import { OpinionComponent } from './opinion/opinion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { DetailJournalisteComponent } from './detail-journaliste/detail-journaliste.component';



const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "business", component: BusinessComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "details", component: DetailsComponent },
  { path: "detail-journaliste", component: DetailJournalisteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
