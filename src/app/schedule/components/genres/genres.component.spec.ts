import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { GenresComponent } from './genres.component';
import { tvSeriesScheduleApiDataMock } from '../../services/tv-series-schedule/tv-series-schedule.mock';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
