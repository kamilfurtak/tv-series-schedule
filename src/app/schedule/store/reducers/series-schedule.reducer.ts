import {
  DATE_SELECT,
  TvSeriesActions,
} from '../actions/series-schedule.actions';
import * as fromRoot from '../../../app.reducer';

export interface TvSeriesScheduleState {
  selectedDate: string;
}

export interface State extends fromRoot.State {
  selectedDate: '';
}

const initialState: TvSeriesScheduleState = {
  selectedDate: '',
};

export function seriesScheduleReducer(
  state = initialState,
  action: TvSeriesActions
) {
  switch (action.type) {
    case DATE_SELECT:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default: {
      return state;
    }
  }
}
