import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSeriesSchedule from '../../store/reducers/series-schedule.reducer';
import { TvSeriesSchedule } from '../../services/tv-series-schedule/tv-series-schedule.model';
import * as fromRoot from '../../../app.reducer';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.less'],
})
export class SeriesCardsComponent {
  isLoading$: Observable<boolean> | undefined;

  tvSeriesSchedules$: Observable<TvSeriesSchedule[]>;

  constructor(private store: Store<fromSeriesSchedule.State>) {
    this.tvSeriesSchedules$ = this.store.select(
      fromSeriesSchedule.getAvailableTvSeriesSchedules
    );
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  identify(index: number, item: any): number | undefined {
    return item ? item.id : undefined;
  }
}
