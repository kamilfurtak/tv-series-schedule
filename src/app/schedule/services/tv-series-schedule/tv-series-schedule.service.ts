import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { skip } from 'rxjs/operators';
import { TvSeriesSchedule } from './tv-series-schedule.model';
import * as fromRoot from '../../../app.reducer';
import * as fromSeriesSchedule from '../../store/reducers/series-schedule.reducer';
import * as UI from '../../../shared/ui.actions';
import * as SeriesSchedule from '../../store/actions/series-schedule.actions';

@Injectable({
  providedIn: 'root',
})
export class TvSeriesScheduleService {
  private apiUrl = 'https://api.tvmaze.com/schedule/web';

  constructor(
    private httpClient: HttpClient,
    private store: Store<fromRoot.State>
  ) {}

  initTvSeriesSchedulesBySelectedDateListener(): void {
    this.store
      .select(fromSeriesSchedule.getSelectedDate)
      .pipe(skip(1))
      .subscribe((selectedDate) => {
        this.store.dispatch(new UI.StartLoading());
        this.httpClient
          .get<TvSeriesSchedule[]>(this.apiUrl, {
            params: new HttpParams()
              .set('date', selectedDate)
              .set('country', 'US'),
          })
          .subscribe(
            (response) => {
              this.store.dispatch(new UI.StopLoading());
              this.store.dispatch(
                new SeriesSchedule.SetAvailableTvSeriesSchedules(response)
              );
            },
            () => {
              this.store.dispatch(new UI.StopLoading());
            }
          );
      });
  }
}
