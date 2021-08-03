import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomNgbDateAdapter } from './custom-ngb-date-adapter';
import { CustomDateParserFormatter } from './custom-date-parser-formatter';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule, FormsModule],
  exports: [CommonModule, NgbModule, FormsModule],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomNgbDateAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class SharedModule {}
