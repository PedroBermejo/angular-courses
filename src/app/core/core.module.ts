import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FakeLogoComponent, BreadcrumbsComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
