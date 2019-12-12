import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {CoursePageComponent} from './courses/components/course-page/course-page.component';
import {NewCourseComponent} from './courses/components/new-course/new-course.component';
import {AuthorizationService} from './services/authorization.service';
import {LoginPageComponent} from './login/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursePageComponent,
    canActivate: [AuthorizationService]
  },
  {
    path: 'courses/new',
    component: NewCourseComponent,
    canActivate: [AuthorizationService]
  },
  {
    path: 'courses/:id',
    component: NewCourseComponent,
    canActivate: [AuthorizationService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    })
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
