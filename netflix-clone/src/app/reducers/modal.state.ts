import { SET_STATUS } from '../actions/modal.actions';
import { UserResponse } from '../interfaces/user.response';
export interface AppState {
  activeModal: boolean;
  user: UserResponse;
}
export const INITIAL_STATE: AppState = {
  activeModal: false,
  user: null,
};
export function rootReducer(state: AppState, action): AppState {
  switch (action.type) {
    case SET_STATUS:
      return Object.assign({}, state, {
        ...state,
        activeModal: action.status,
      });
    case 'SET_USER':
      return Object.assign({}, state, {
        ...state,
        user: action.user,
      });
  }
  return state;
}
