import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule, NgbDatepickerModule],
})
export class ScheduleModule {}
