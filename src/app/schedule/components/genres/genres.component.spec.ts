import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { GenresComponent } from './genres.component';
import { tvSeriesScheduleApiDataMock } from '../../services/tv-series-schedule/tv-series-schedule.mock';
import * as fromSeriesSchedule from '../../store/reducers/series-schedule.reducer';
import * as SeriesSchedule from '../../store/actions/series-schedule.actions';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;
  let store: MockStore;

  const initialState = {
    isLoading: false,
    selectedDate: '',
    availableTvSeriesSchedules: tvSeriesScheduleApiDataMock,
    checkedTvGenres: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })],
      declarations: [GenresComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyOn(store, 'select');
    });

    it('should call store.select once with proper arg', () => {
      component.ngOnInit();

      expect(store.select).toHaveBeenCalledTimes(1);
      expect(store.select).toHaveBeenCalledWith(
        fromSeriesSchedule.getAvailableTvGenres
      );
    });

    it('should set genresList$ to value', () => {
      component.ngOnInit();

      (store.select as jasmine.Spy).and.returnValue({});
      expect(store.select).toHaveBeenCalledTimes(1);
      expect(component.genresList$).toEqual(undefined);
    });
  });

  describe('onGenreCheck', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch');
    });

    it('should call store.dispatch once with proper arg', () => {
      component.onGenreCheck();

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(
        new SeriesSchedule.SetCheckedTvGenres({})
      );
    });
  });
});
