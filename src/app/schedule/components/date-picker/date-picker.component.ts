import { Component } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateAdapter,
} from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import * as SeriesSchedule from '../../store/actions/series-schedule.actions';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
})
export class DatePickerComponent {
  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<any>,
    private store: Store<fromRoot.State>
  ) {}

  toModel(date: NgbDate) {
    return this.dateAdapter.toModel(date);
  }

  onDateSelect(selectedDate: NgbDate) {
    this.store.dispatch(
      new SeriesSchedule.DateSelect(this.toModel(selectedDate))
    );
    this.store.dispatch(new SeriesSchedule.SetCheckedTvGenres({}));
  }
}
