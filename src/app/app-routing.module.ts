import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CareerComponent } from './career/career.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'contatcus', component: ContactusComponent
  },
  {
    path: 'career', component: CareerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
