import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeriesListComponent } from './series-list.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { GenresComponent } from '../genres/genres.component';
import { SeriesCardsComponent } from '../series-cards/series-cards.component';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;
  const initialState = {
    isLoading: false,
    selectedDate: '',
    availableTvSeriesSchedules: [],
    checkedTvGenres: {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SeriesListComponent,
        DatePickerComponent,
        GenresComponent,
        SeriesCardsComponent,
      ],
      providers: [provideMockStore({ initialState })],
      imports: [NgbModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
