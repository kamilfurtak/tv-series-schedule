import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { getDateStringWithLeadingZero } from './date.utils';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }

    return null;
  }

  format(date: NgbDateStruct | null): string {
    if (date) {
      return getDateStringWithLeadingZero(date, this.DELIMITER);
    }
    return '';
  }
}
