import { Component, OnInit } from '@angular/core';
import { TvSeriesScheduleService } from './services/tv-series-schedule/tv-series-schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
})
export class ScheduleComponent implements OnInit {
  constructor(private tvSeriesScheduleService: TvSeriesScheduleService) {}

  ngOnInit(): void {
    this.tvSeriesScheduleService.initTvSeriesSchedulesBySelectedDateListener();
  }
}
