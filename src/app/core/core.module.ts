import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FakeLogoComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class CoreModule { }
