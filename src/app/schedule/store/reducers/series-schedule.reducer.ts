import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DATE_SELECT,
  SET_AVAILABLE_TV_SERIES_SCHEDULES,
  TvSeriesActions,
} from '../actions/series-schedule.actions';
import * as fromRoot from '../../../app.reducer';

export interface TvSeriesScheduleState {
  selectedDate: string;
}

export interface State extends fromRoot.State {
  selectedDate: '';
}

const initialState: TvSeriesScheduleState = {
  selectedDate: '',
};

export function seriesScheduleReducer(
  state = initialState,
  action: TvSeriesActions
) {
  switch (action.type) {
    case DATE_SELECT:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case SET_AVAILABLE_TV_SERIES_SCHEDULES:
      return {
        ...state,
        availableTvSeriesSchedules: action.payload,
      };
    default: {
      return state;
    }
  }
}

export const getSeriesScheduleState =
  createFeatureSelector<TvSeriesScheduleState>('seriesSchedule');
export const getSelectedDate = createSelector(
  getSeriesScheduleState,
  (state: TvSeriesScheduleState) => state.selectedDate
);
