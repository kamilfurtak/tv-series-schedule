import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getTvSeriesDetails();
  }

  getTvSeriesDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
  }

  goBack(): void {
    this.location.back();
  }
}
