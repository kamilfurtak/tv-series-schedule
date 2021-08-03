import { NgModule } from '@angular/core';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../shared/shared.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { seriesScheduleReducer } from './store/reducers/series-schedule.reducer';
import { TvSeriesScheduleService } from './services/tv-series-schedule/tv-series-schedule.service';

@NgModule({
  declarations: [ScheduleComponent, DatePickerComponent],
  imports: [
    SharedModule,
    ScheduleRoutingModule,
    NgbDatepickerModule,
    StoreModule.forFeature('seriesSchedule', seriesScheduleReducer),
  ],
  providers: [TvSeriesScheduleService],
})
export class ScheduleModule {}
