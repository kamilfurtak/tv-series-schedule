import { NgModule } from '@angular/core';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../shared/shared.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
  declarations: [ScheduleComponent, DatePickerComponent],
  imports: [SharedModule, ScheduleRoutingModule, NgbDatepickerModule],
})
export class ScheduleModule {}
