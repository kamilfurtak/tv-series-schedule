import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpyLocation } from '@angular/common/testing';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let store: MockStore;
  let location: Location;

  const initialState = {
    isLoading: false,
    selectedDate: '',
    availableTvSeriesSchedules: [],
    checkedTvGenres: {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgbModule],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: undefined,
              }),
            },
          },
        },
        { provide: Location, useClass: SpyLocation },
      ],
      declarations: [DetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyOn(component, 'getTvSeriesDetails');
    });

    it('should call getTvSeriesDetails once', () => {
      component.ngOnInit();

      expect(component.getTvSeriesDetails).toHaveBeenCalledTimes(1);
    });
  });

  describe('getTvSeriesDetails', () => {
    beforeEach(() => {
      spyOn(store, 'select');
    });

    it('should call store.select once with proper arg', () => {
      component.getTvSeriesDetails();

      expect(store.select).toHaveBeenCalledTimes(1);
    });
  });

  describe('goBack', () => {
    beforeEach(() => {
      spyOn(location, 'back');
    });

    it('should call location.back once', () => {
      component.goBack();

      expect(location.back).toHaveBeenCalledTimes(1);
    });
  });
});
