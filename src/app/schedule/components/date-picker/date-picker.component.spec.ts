import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgbDate, NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker.component';
import { CustomNgbDateAdapter } from '../../../shared/custom-ngb-date-adapter';
import * as SeriesSchedule from '../../store/actions/series-schedule.actions';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  let store: MockStore;

  const initialState = {
    isLoading: false,
    selectedDate: '',
    availableTvSeriesSchedules: [],
    checkedTvGenres: {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        { provide: NgbDateAdapter, useClass: CustomNgbDateAdapter },
      ],
      declarations: [DatePickerComponent],
      imports: [NgbModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toModel', () => {
    it('should return proper value', () => {
      const mockNgbDate = { year: 2021, month: 5, day: 5 } as NgbDate;
      expect(component.toModel(mockNgbDate)).toEqual('2021-05-05');
    });
  });

  describe('onDateSelect', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch');
    });

    it('should call store.dispatch once with proper arg', () => {
      const mockNgbDate = { year: 2021, month: 5, day: 5 } as NgbDate;

      component.onDateSelect(mockNgbDate);

      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(
        new SeriesSchedule.DateSelect('2021-05-05')
      );
    });
  });
});
