import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export function getDateStringWithLeadingZero(
  date: NgbDateStruct,
  delimiter: string
) {
  const day = date?.day.toString().length < 2 ? `0${date.day}` : date.day;
  const month =
    date?.month.toString().length < 2 ? `0${date.month}` : date.month;
  return `${date.year + delimiter}${month}${delimiter}${day}`;
}
