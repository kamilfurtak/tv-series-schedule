import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { TvSeriesScheduleService } from '../../services/tv-series-schedule/tv-series-schedule.service';
import * as SeriesSchedule from '../actions/series-schedule.actions';
import * as UI from '../../../shared/ui.actions';
import * as fromSeriesSchedule from '../reducers/series-schedule.reducer';

@Injectable()
export class SeriesScheduleEffects {
  constructor(
    private actions$: Actions,
    private tvSeriesScheduleService: TvSeriesScheduleService,
    private store: Store<fromSeriesSchedule.State>
  ) {}

  loadSeriesSchedules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SeriesSchedule.DATE_SELECT),
      map((action: SeriesSchedule.DateSelect) => action.payload),
      tap(() => this.store.dispatch(new UI.StartLoading())),
      switchMap((selectedDate) =>
        this.tvSeriesScheduleService
          .getTvSeriesSchedulesBySelectedDate(selectedDate)
          .pipe(
            switchMap((tvSeriesSchedules) => [
              new UI.StopLoading(),
              new SeriesSchedule.SetAvailableTvSeriesSchedules(
                tvSeriesSchedules
              ),
            ]),
            catchError(() => of(new UI.StopLoading()))
          )
      )
    )
  );
}
