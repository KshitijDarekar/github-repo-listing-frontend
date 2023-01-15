import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private BASE_URL = environment.BASE_URL;

  username: string | undefined;
  constructor(private httpClient: HttpClient) {}

  getUserProfile(username: string): Observable<any> {
    this.username = username;

    const profileUrl = this.BASE_URL + 'user?username=' + this.username;
    return this.httpClient
      .get<any>(profileUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  getUserRepositories(username: string, pageNumber: number): Observable<any[]> {
    this.username = username;

    const profileRepos =
      this.BASE_URL +
      `repos?username=${this.username}&per_page=10&page=${pageNumber}`;
    return this.httpClient
      .get<any[]>(profileRepos, {
        headers: new HttpHeaders().set(
          'Accept',
          'application/vnd.github.mercy-preview+json'
        ),
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
