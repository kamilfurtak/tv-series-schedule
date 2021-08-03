import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import {
  DATE_SELECT,
  SET_AVAILABLE_TV_SERIES_SCHEDULES, SET_CHECKED_TV_GENRES,
  TvSeriesActions,
} from '../actions/series-schedule.actions';
import * as fromRoot from '../../../app.reducer';
import { TvSeriesSchedule } from '../../services/tv-series-schedule/tv-series-schedule.model';
import { TvGenresFormModel } from '../../components/genres/genres.model';

export interface TvSeriesScheduleState {
  selectedDate: string;
  availableTvSeriesSchedules: TvSeriesSchedule[];
  checkedTvGenres: TvGenresFormModel;
}

export interface State extends fromRoot.State {
  selectedDate: '';
}

const initialState: TvSeriesScheduleState = {
  selectedDate: '',
  availableTvSeriesSchedules: [],
  checkedTvGenres: {},
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
    case SET_CHECKED_TV_GENRES:
      return {
        ...state,
        checkedTvGenres: { ...state.checkedTvGenres, ...action.payload },
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

export const getAvailableTvGenres = createSelector(
  getSeriesScheduleState,
  (state: TvSeriesScheduleState) => [
    ...new Set(
      state.availableTvSeriesSchedules.flatMap(
        // eslint-disable-next-line no-underscore-dangle
        (tvSeriesSchedule) => tvSeriesSchedule._embedded.show.genres
      )
    ),
  ]
);

export const getAvailableTvSeriesSchedules = createSelector(
  getSeriesScheduleState,
  (state: TvSeriesScheduleState) => {
    if (Object.keys(state.checkedTvGenres).length) {
      return state.availableTvSeriesSchedules.filter((tvSeriesSchedule) => {
        // eslint-disable-next-line no-underscore-dangle
        const genres = tvSeriesSchedule._embedded.show.genres.map((genre) =>
          genre.toLowerCase()
        );
        const checkedGenres = [] as any;
        for (const [key, value] of Object.entries(state.checkedTvGenres)) {
          if (value) {
            checkedGenres.push(key);
          }
        }
        return _.intersection(genres, checkedGenres).length;
      });
    }
    return state.availableTvSeriesSchedules;
  }
);
