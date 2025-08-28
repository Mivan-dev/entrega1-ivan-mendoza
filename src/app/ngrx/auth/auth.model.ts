import { LoggedUser } from "../../../shared/entities";

export interface AuthState {
  user: LoggedUser | null;
  //password: string | null;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  //password: null,
  isLoggedIn: false
};
