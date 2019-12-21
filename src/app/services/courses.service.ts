import {Injectable} from '@angular/core';
import {Course} from '../interfaces/course';
import {HttpClient} from '@angular/common/http';
import {globalConstants} from '../global-constants';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  readonly URL_COUNT = `${globalConstants.endpoints.domain}/${
    globalConstants.endpoints.courses}?${
    globalConstants.queryParams.start}=0&${
    globalConstants.queryParams.count}`;
  readonly URL_SEARCH = `${globalConstants.endpoints.domain}/${
    globalConstants.endpoints.courses}?${
    globalConstants.queryParams.textFragment}`;
  readonly URL_COURSES = `${globalConstants.endpoints.domain}/${
    globalConstants.endpoints.courses}`;


  constructor(private httpClient: HttpClient) {}

  retrieveListByCount(count: number): Observable<Course[]> {
    return this.httpClient.get(`${this.URL_COUNT}=${count}`);
  }

  retrieveListByString(searchString: string): Observable<Course[]> {
    return this.httpClient.get(`${this.URL_SEARCH}=${searchString}`);
  }

  getItemById(idFind: number): Observable<Course> {
    return this.httpClient.get(`${this.URL_COURSES}/${idFind}`);
  }

  upsertCourse(courseFind: Course): Observable<any> {
    return this.httpClient.patch(`${this.URL_COURSES}/${courseFind.id}`, courseFind);
  }

  removeItem(idRemove: number): Observable<any> {
    return this.httpClient.delete(`${this.URL_COURSES}/${idRemove}`);
  }

  createCourse(courseCreate: Course): Observable<any> {
    return this.httpClient.post(`${this.URL_COURSES}`, courseCreate);
  }

}
