import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CareerComponent } from './career/career.component';
import { CareerService } from './career.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactusComponent,
    CareerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CareerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
