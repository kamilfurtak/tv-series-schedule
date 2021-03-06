import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SeriesCardsComponent } from './series-cards.component';

describe('SeriesCardsComponent', () => {
  let component: SeriesCardsComponent;
  let fixture: ComponentFixture<SeriesCardsComponent>;
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
      providers: [provideMockStore({ initialState })],
      declarations: [SeriesCardsComponent],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCardsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('identify', () => {
    it('should return proper value, when item provided', () => {
      expect(component.identify(0, { id: 1 })).toBe(1);
    });

    it('should return proper value, when item not provided', () => {
      expect(component.identify(0, {})).toEqual(undefined);
    });
  });
});
