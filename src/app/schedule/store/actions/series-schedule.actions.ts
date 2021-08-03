import { Action } from '@ngrx/store';

export const DATE_SELECT = '[UI] Date select';

export class DateSelect implements Action {
  readonly type = DATE_SELECT;

  constructor(public payload: string) {}
}

export type TvSeriesActions = DateSelect;
