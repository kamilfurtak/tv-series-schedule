import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSeriesSchedule from '../../store/reducers/series-schedule.reducer';
import { Show } from '../../services/tv-series-schedule/tv-series-schedule.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent implements OnInit {
  showDetails$: Observable<Show | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private store: Store<fromSeriesSchedule.State>
  ) {}

  ngOnInit(): void {
    this.getTvSeriesDetails();
  }

  getTvSeriesDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.showDetails$ = this.store.select(
      fromSeriesSchedule.getShowDetailsById(id)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
