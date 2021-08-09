import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import {
  DATE_SELECT,
  SET_AVAILABLE_TV_SERIES_SCHEDULES,
  SET_CHECKED_TV_GENRES,
  TvSeriesActions,
} from '../actions/series-schedule.actions';
import * as fromRoot from '../../../app.reducer';
import {
  Show,
  TvSeriesSchedule,
} from '../../services/tv-series-schedule/tv-series-schedule.model';
import { TvGenresFormModel } from '../../components/genres/genres.model';

export interface TvSeriesScheduleState {
  selectedDate: string;
  availableTvSeriesSchedules: TvSeriesSchedule[];
  checkedTvGenres: TvGenresFormModel;
}

export interface State extends fromRoot.State {
  seriesSchedule: TvSeriesScheduleState;
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

export const getCheckedTvGenres = createSelector(
  getSeriesScheduleState,
  (state: TvSeriesScheduleState) => {
    const checkedGenres: string[] = [];
    for (const [key, value] of Object.entries(state.checkedTvGenres)) {
      if (value) {
        checkedGenres.push(key);
      }
    }
    return checkedGenres;
  }
);

export const getAvailableCheckedTvGenres = createSelector(
  getAvailableTvGenres,
  getCheckedTvGenres,
  (availableTvGenres, checkedGenres) =>
    _.intersection(
      availableTvGenres.map((genre) => genre.toLowerCase()),
      checkedGenres
    )
);

export const getAvailableTvSeriesSchedules = createSelector(
  getSeriesScheduleState,
  getAvailableCheckedTvGenres,
  (state: TvSeriesScheduleState, availableCheckedTvGenres) => {
    if (Object.keys(availableCheckedTvGenres).length) {
      return state.availableTvSeriesSchedules.filter((tvSeriesSchedule) => {
        // eslint-disable-next-line no-underscore-dangle
        const genres = tvSeriesSchedule._embedded.show.genres.map((genre) =>
          genre.toLowerCase()
        );
        return _.isEqual(availableCheckedTvGenres.sort(), genres.sort());
        // Alternative filter
        // return _.intersection(availableCheckedTvGenres, genres).length;
      });
    }
    return state.availableTvSeriesSchedules;
  }
);

export const getShowDetailsById = (
  id: number
): MemoizedSelector<object, Show | undefined> =>
  createSelector(
    getAvailableTvSeriesSchedules,
    (availableTvGenres) =>
      // eslint-disable-next-line no-underscore-dangle
      availableTvGenres.find((item) => item._embedded.show.id === id)?._embedded
        .show
  );
