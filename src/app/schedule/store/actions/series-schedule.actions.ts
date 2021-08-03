import { Action } from '@ngrx/store';
import { TvSeriesSchedule } from '../../services/tv-series-schedule/tv-series-schedule.model';

export const DATE_SELECT = '[UI] Date select';
export const SET_AVAILABLE_TV_SERIES_SCHEDULES =
  '[TV] Set available tv series schedules';

export class DateSelect implements Action {
  readonly type = DATE_SELECT;

  constructor(public payload: string) {}
}

export class SetAvailableTvSeriesSchedules implements Action {
  readonly type = SET_AVAILABLE_TV_SERIES_SCHEDULES;

  constructor(public payload: TvSeriesSchedule[]) {}
}

export type TvSeriesActions = DateSelect | SetAvailableTvSeriesSchedules;
