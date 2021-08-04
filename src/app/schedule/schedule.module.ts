import { NgModule } from '@angular/core';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../shared/shared.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { seriesScheduleReducer } from './store/reducers/series-schedule.reducer';
import { TvSeriesScheduleService } from './services/tv-series-schedule/tv-series-schedule.service';
import { SeriesCardsComponent } from './components/series-cards/series-cards.component';
import { GenresComponent } from './components/genres/genres.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    DatePickerComponent,
    SeriesCardsComponent,
    GenresComponent,
    DetailsComponent,
  ],
  imports: [
    SharedModule,
    ScheduleRoutingModule,
    NgbDatepickerModule,
    StoreModule.forFeature('seriesSchedule', seriesScheduleReducer),
  ],
  providers: [TvSeriesScheduleService],
})
export class ScheduleModule {}
