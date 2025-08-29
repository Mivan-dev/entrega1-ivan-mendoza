import { createReducer, on } from "@ngrx/store";
import { initialAuthState, LOGGED_OUT_AUTH_STATE } from "./auth.model";
import { login, logout } from './auth.actions';
import { USERS_DATA } from "../../../shared/entities";





export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, { username, password }) => {
    const user = USERS_DATA.find(u => u.username === username && u.password === password);
    return {
      ...state,
      user: user ? { username: user.username, role: user.role } : null,
      isLoggedIn: !!user
    };
  }),
  on(logout, () => LOGGED_OUT_AUTH_STATE)
);