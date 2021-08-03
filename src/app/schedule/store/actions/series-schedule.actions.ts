import { Action } from '@ngrx/store';
import { TvSeriesSchedule } from '../../services/tv-series-schedule/tv-series-schedule.model';
import { TvGenresFormModel } from '../../components/genres/genres.model';

export const DATE_SELECT = '[UI] Date select';
export const SET_AVAILABLE_TV_SERIES_SCHEDULES =
  '[TV] Set available tv series schedules';
export const SET_CHECKED_TV_GENRES = '[TV] Set checked tv genres';

export class DateSelect implements Action {
  readonly type = DATE_SELECT;

  constructor(public payload: string) {}
}

export class SetAvailableTvSeriesSchedules implements Action {
  readonly type = SET_AVAILABLE_TV_SERIES_SCHEDULES;

  constructor(public payload: TvSeriesSchedule[]) {}
}

export class SetCheckedTvGenres implements Action {
  readonly type = SET_CHECKED_TV_GENRES;

  constructor(public payload: TvGenresFormModel) {}
}

export type TvSeriesActions =
  | DateSelect
  | SetAvailableTvSeriesSchedules
  | SetCheckedTvGenres;
