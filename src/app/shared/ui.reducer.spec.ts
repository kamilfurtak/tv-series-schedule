import * as fromUi from './ui.reducer';
import * as UI from './ui.actions';

describe('UiReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromUi;
      const action = {
        type: 'Unknown',
      };

      const state = fromUi.uiReducer(initialState, action as any);

      expect(state).toBe(initialState);
    });
  });

  describe('StartLoading action', () => {
    it('should set isLoading to true and update the state', () => {
      const { initialState } = fromUi;
      const newState = { isLoading: true };
      const action = new UI.StartLoading();

      const state = fromUi.uiReducer(initialState, action);

      expect(state).toEqual(newState);
    });
  });

  describe('StopLoading action', () => {
    it('should set isLoading to false and update the state', () => {
      const { initialState } = fromUi;
      const newState = { isLoading: false };
      const action = new UI.StopLoading();

      const state = fromUi.uiReducer(initialState, action);

      expect(state).toEqual(newState);
    });
  });
});
