import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {CoursePageComponent} from './courses/components/course-page/course-page.component';
import {NewCourseComponent} from './courses/components/new-course/new-course.component';
import {LoginPageComponent} from './login/login-page/login-page.component';
import {GuardService} from './services/guard.service';

export const routes: Routes = [
  {
    path: '',
    canActivate: [GuardService],
    children: [
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        children: [
          {
            path: '',
            component: CoursePageComponent
          },
          {
            path: 'new',
            component: NewCourseComponent
          },
          {
            path: ':id',
            component: NewCourseComponent
          }
        ]
      }
    ]
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
      enableTracing: false,
    })
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
