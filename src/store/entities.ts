import { State as LoginState } from '../features/login/entities';

export interface RootState {
  login: LoginState;
}
