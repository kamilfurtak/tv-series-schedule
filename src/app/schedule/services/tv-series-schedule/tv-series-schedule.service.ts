import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TvSeriesSchedule } from './tv-series-schedule.model';
import * as fromRoot from '../../../app.reducer';

@Injectable({
  providedIn: 'root',
})
export class TvSeriesScheduleService {
  private apiUrl = 'https://api.tvmaze.com/schedule/web';

  constructor(
    private httpClient: HttpClient,
    private store: Store<fromRoot.State>
  ) {}

  getTvSeriesSchedulesBySelectedDate(
    selectedDate: string
  ): Observable<TvSeriesSchedule[]> {
    return this.httpClient
      .get<TvSeriesSchedule[]>(this.apiUrl, {
        params: new HttpParams().set('date', selectedDate).set('country', 'US'),
      })
      .pipe(catchError((error) => throwError(error.json())));
  }
}
