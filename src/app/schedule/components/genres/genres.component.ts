import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import * as fromRoot from '../../../app.reducer';
import * as fromSeriesSchedule from '../../store/reducers/series-schedule.reducer';
import * as SeriesSchedule from '../../store/actions/series-schedule.actions';
import { TvGenresFormModel } from './genres.model';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.less'],
})
export class GenresComponent implements OnInit {
  tvGenresFormModel: TvGenresFormModel = {};

  genresList$: Observable<string[]> | undefined;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.genresList$ = this.store.select(
      fromSeriesSchedule.getAvailableTvGenres
    );
  }

  onGenreCheck(): void {
    this.store.dispatch(
      new SeriesSchedule.SetCheckedTvGenres(_.cloneDeep(this.tvGenresFormModel))
    );
  }
}
