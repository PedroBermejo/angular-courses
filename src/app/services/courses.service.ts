import {Injectable} from '@angular/core';
import {Course} from '../interfaces/course';
import {HttpClient} from '@angular/common/http';
import {globalConstants} from '../global-constants';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  readonly URL_COURSES = Location.joinWithSlash(
    globalConstants.endpoints.domain, globalConstants.endpoints.courses);

  constructor(private httpClient: HttpClient) {}

  retrieveListByCount(count: number): Observable<any> {
    const URL_COUNT = `${this.URL_COURSES}?${
      globalConstants.queryParams.start}=0&${
      globalConstants.queryParams.count}=${count}`;

    return this.httpClient.get(`${URL_COUNT}`);
  }

  retrieveListByString(searchString: string): Observable<any> {
    const URL_SEARCH = `${this.URL_COURSES}?${
      globalConstants.queryParams.textFragment}=${searchString}`;

    return this.httpClient.get(`${URL_SEARCH}`);
  }

  getItemById(idFind: number): Observable<any> {
    return this.httpClient.get(Location.joinWithSlash(this.URL_COURSES,
      idFind.toString()));
  }

  upsertCourse(courseFind: Course): Observable<any> {
    return this.httpClient.patch(Location.joinWithSlash(this.URL_COURSES,
      courseFind.id.toString()), courseFind);
  }

  removeItem(idRemove: number): Observable<any> {
    return this.httpClient.delete(Location.joinWithSlash(this.URL_COURSES,
      idRemove.toString()));
  }

  createCourse(courseCreate: Course): Observable<any> {
    return this.httpClient.post(`${this.URL_COURSES}`, courseCreate);
  }

}
