import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import * as fromSeriesSchedule from './series-schedule.reducer';
import * as SeriesSchedule from '../actions/series-schedule.actions';
import {
  getAvailableTvSeriesSchedules,
  getCheckedTvGenres,
  getSeriesScheduleState,
  TvSeriesScheduleState,
} from './series-schedule.reducer';
import { tvSeriesScheduleApiDataMock } from '../../services/tv-series-schedule/tv-series-schedule.mock';
import { TvGenresFormModel } from '../../components/genres/genres.model';
import { SeriesCardsComponent } from '../../components/series-cards/series-cards.component';

describe('SeriesScheduleReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromSeriesSchedule;
      const action = {
        type: 'Unknown',
      };

      const state = fromSeriesSchedule.seriesScheduleReducer(
        initialState,
        action as any
      );

      expect(state).toBe(initialState);
    });
  });

  describe('DateSelect action', () => {
    it('should set selected date and update the state in an immutable way', () => {
      const { initialState } = fromSeriesSchedule;
      const mockDateString = '2021-08-09';
      const newState: TvSeriesScheduleState = {
        selectedDate: mockDateString,
        availableTvSeriesSchedules: [],
        checkedTvGenres: {},
      };
      const action = new SeriesSchedule.DateSelect(mockDateString);

      const state = fromSeriesSchedule.seriesScheduleReducer(
        initialState,
        action
      );

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('SetAvailableTvSeriesSchedules action', () => {
    it('should set set available series schedules and update the state in an immutable way', () => {
      const { initialState } = fromSeriesSchedule;
      const newState: TvSeriesScheduleState = {
        selectedDate: '',
        availableTvSeriesSchedules: tvSeriesScheduleApiDataMock,
        checkedTvGenres: {},
      };
      const action = new SeriesSchedule.SetAvailableTvSeriesSchedules(
        tvSeriesScheduleApiDataMock
      );

      const state = fromSeriesSchedule.seriesScheduleReducer(
        initialState,
        action
      );

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('SetCheckedTvGenres action', () => {
    it('should set checked tv genres and update the state in an immutable way', () => {
      const { initialState } = fromSeriesSchedule;
      const mockCheckedTvGenres: TvGenresFormModel = { children: true };
      const newState: TvSeriesScheduleState = {
        selectedDate: '',
        availableTvSeriesSchedules: [],
        checkedTvGenres: { children: true },
      };
      const action = new SeriesSchedule.SetCheckedTvGenres(mockCheckedTvGenres);

      const state = fromSeriesSchedule.seriesScheduleReducer(
        initialState,
        action
      );

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('Selectors', () => {
    it('should get checked tv genres', () => {
      const initialState: TvSeriesScheduleState = {
        selectedDate: '',
        availableTvSeriesSchedules: tvSeriesScheduleApiDataMock,
        checkedTvGenres: { children: true },
      };
      const result =
        fromSeriesSchedule.getCheckedTvGenres.projector(initialState);

      expect(result).toEqual(['children']);
    });

    it('should get available tv genres', () => {
      const initialState: TvSeriesScheduleState = {
        selectedDate: '',
        availableTvSeriesSchedules: tvSeriesScheduleApiDataMock,
        checkedTvGenres: { children: true },
      };
      const result =
        fromSeriesSchedule.getAvailableTvGenres.projector(initialState);

      expect(result).toEqual(['Children']);
    });
  });
});
